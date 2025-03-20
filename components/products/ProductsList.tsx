import { FlatList } from "react-native";
import { View } from "react-native";
import PaginationButtons from "@/components/Pagination";
import ProductListItem from "./ProductListItem";
import { Product } from "@/constants/Types";
import { useState } from "react";
import { ProductResponse } from "@/constants/Types";
import { useEffect } from "react";
import { useData } from "@/constants/Context";

export default function ProductsList({order}: {order?: boolean}) {

    const [products, setProducts] = useState<Product[]>([]);
    const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);

    const itemsPerPage = 10;
    const data: ProductResponse | null = useData();
    
    const sortProducts = (products: Product[], order: boolean) => {
        return order ? 
        products.sort((a, b) => b.title > a.title ? 1 : -1) : 
        products.sort((a, b) => a.title > b.title ? 1 : -1);
    };

    useEffect(() => {
        
        if (data) {
            setProducts(data.products);
        }
    }, [data]);

    useEffect(() => {
        if(order === undefined) return;
        console.log('order', order);
        setPaginatedProducts(sortProducts(paginatedProducts, order));
    }, [order]);
    
    return (
        <View style={{
            marginTop: 15,
            marginBottom: 80,
        }}>
            <FlatList
                data={paginatedProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => <ProductListItem item={item} key={index } />}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                extraData={order}
            />
            {products.length > itemsPerPage && (
                <PaginationButtons
                    paginationData={products}
                    setPaginationData={setPaginatedProducts}
                    itemsPerPage={itemsPerPage}
                />
            )}
        </View>
    );
}
import { FlatList, TextInput, View } from "react-native";
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

    const [search, setSearch] = useState<string>("");
    const [showPagination, setShowPagination] = useState<boolean>(false);

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
        setPaginatedProducts(sortProducts(paginatedProducts, order));
    }, [order]);

    useEffect(() => {
        if(search === "") {  
            setPaginatedProducts(products);
            setShowPagination(true);
            return;
        }else{
            setPaginatedProducts(products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())));
            setShowPagination(false);
        }

    }, [search]);
    
    return (
            <View style={{
                marginBottom: 180,
                marginTop: 15,
            }}>
                <TextInput placeholder="Start typing to search" style={{
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 10,
                    marginHorizontal: 10,
                }} onChangeText={(text) => setSearch(text)} />
                <FlatList
                    data={paginatedProducts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => <ProductListItem item={item} key={index } />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
                    contentContainerStyle={{ paddingHorizontal: 10}}
                    style={{ height: '80%' }}
                    extraData={[order, paginatedProducts]}
                />

                <PaginationButtons
                    paginationData={products}
                    setPaginationData={setPaginatedProducts}
                    itemsPerPage={itemsPerPage}
                    showPagination={showPagination}
                />
            </View>
    );
}
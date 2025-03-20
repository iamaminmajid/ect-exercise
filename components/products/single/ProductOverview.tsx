import { View, Text, StyleSheet } from "react-native";
import { useProduct } from "@/constants/Context";
import { Product } from "@/constants/Types";
import { useLocalSearchParams } from "expo-router";
import ProductImage from "./overview/ProductImage";
import Ratings from "./overview/Ratings";
import Price from "./overview/Price";
import AddToCart from "./overview/AddToCart";

export default function ProductOverview() {
    const { id } = useLocalSearchParams();
    const product: Product | undefined = useProduct(Number(id));

    return (
        <View>
            <ProductImage id={Number(id)} />
            {product?.stock && product?.stock < 10 && <View style={styles.stockLeft}>
                <Text style={styles.stock} testID="stock-warning">Only {product?.stock} left in stock</Text>  
            </View>}
            <View>
                <Ratings id={Number(id)} />

                <Text style={styles.title} testID="product-title">{product?.title}</Text>
                <Text style={styles.description} testID="product-description">{product?.description}</Text>

                <Price id={Number(id)} />

                <AddToCart id={Number(id)} />
                
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 24,
        color: '#333',
    },
    stock: {
        fontSize: 16,
        color: '#fff',
    },
    stockLeft: {
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
    },
});

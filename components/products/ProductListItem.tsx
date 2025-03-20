import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../../constants/Types";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function ProductListItem({ item }: { item: Product }) {
    return (
        <TouchableOpacity style={styles.productCard} onPress={() => router.push({
            pathname: "/single",
            params: {
                id: item.id,
            },
        })}>
            
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.thumbnail }} testID="product-image" style={styles.productImage} />
            </View>

            <Text style={styles.productTitle} testID="product-title">{item.title}</Text>
            <View style={styles.priceAndRatingContainer}>
                <Text style={styles.productPrice} testID="product-price">${item.price}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#f2b200" />
                    <Text style={styles.ratingText} testID="product-rating">{item.rating}</Text>
                </View>
            </View>
            <Text style={styles.stockInfo} testID="product-stock">Only {item.stock} left</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    productCard: {
        marginVertical: 8,
        width: '48%',
    },
    imageContainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#f7f5f4',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        backgroundColor: '#f7f5f4',
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    priceAndRatingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 16,
        color: '#333',
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'light',
        color: '#333',
    },
    stockInfo: {
        fontSize: 12,
        color: '#333',
        marginTop: 5,
    },
});

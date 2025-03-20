import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function AddToCart({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    const [isFavourite, setIsFavourite] = useState(false);

    return (  
        <View style={styles.addToCartContainer}>
            <TouchableOpacity style={styles.addToCartButton}>
                <Ionicons name="cart-outline" size={24} color="white" />
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToFavouriteContainer} onPress={() => setIsFavourite(!isFavourite)}>
                <Ionicons name={isFavourite ? "heart" : "heart-outline"} size={32} color={isFavourite ? "red" : "#333"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addToCartButton: {
        backgroundColor: '#3486eb',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '80%',
        justifyContent: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addToCartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addToFavouriteContainer: {
        paddingVertical: 16,
        borderRadius: 12,
        width: '20%',
        alignItems: 'center',
    },
});
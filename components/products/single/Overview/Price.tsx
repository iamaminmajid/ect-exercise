import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";


export default function ProductImage({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View style={styles.priceContainer}>
            <Text style={styles.price}>USD {product?.price}</Text>
            <Text style={styles.discountPrice}>{product?.discountPercentage}% off</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    discountPrice: {
        fontSize: 16,
        marginLeft: 5,
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        color: 'white',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});
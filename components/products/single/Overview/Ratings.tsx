import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductImage({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#f2b200" />
            <Text style={styles.ratingText}>{product?.rating}</Text>
            <Text style={styles.ratingSubText}>({product?.reviews.length} Reviews)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    ratingText: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    ratingSubText: {
        fontSize: 12,
        marginLeft: 5,
    },
});
import { Text, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Reviews from "./Meta/ReviewsList";

export default function ProductReviews() {

    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <Reviews id={Number(id)} />
        </View>
    );
}


const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});
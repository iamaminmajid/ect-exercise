import { Review } from "@/constants/Types";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function ReviewItem({review}: {review: Review}) {


    const renderStars = (rating: number) => {

        return Array.from({ length: 5 }, (_, index) => (
            <Ionicons key={index} name={index < rating ? "star" : "star-outline"} size={24} color={"#f2b200"} />
        ));
    };

    return (
        <View>
            <View style={styles.ratingContainer}>
                {renderStars(review.rating)}
            </View>
            <Text style={styles.ratingText}><Text style={styles.ratingTextName}>{review.reviewerName}:</Text> {review.comment}</Text>
            <Text style={styles.ratingTextDate}>{new Date(review.date).toLocaleDateString()}</Text>
        </View>
    );
}   


const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingText: {
        fontSize: 16,
        marginBottom: 10,
    },
    ratingTextName: {
        fontWeight: 'bold',
    },
    ratingTextDate: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20
    },
});
import { View } from "react-native";
import { Product, Review } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import ReviewItem from "./ReviewItem";
export default function Reviews({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    const reviews = product?.reviews;

    return (  
        <View>
            {reviews?.map((review: Review, index: number) => <ReviewItem key={index} review={review} />)}
        </View>
    );
}
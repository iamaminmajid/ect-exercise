import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";


export default function Tags({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View style={styles.tagsContainer}>
            {product?.tags.map((tag: string, index: number) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
            ))}
            
        </View>
    );
}

const styles = StyleSheet.create({
    tag: {
        fontSize: 12,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 16,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
});
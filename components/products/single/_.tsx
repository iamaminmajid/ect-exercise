import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";


export default function __({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
});
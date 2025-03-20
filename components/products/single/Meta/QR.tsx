import { StyleSheet, View, Image } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";


export default function QR({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View style={styles.qrCodeContainer}>
            <Image source={{ uri: product?.meta.qrCode }} style={styles.qrCode} />
        </View>
    );
}

const styles = StyleSheet.create({

    qrCode: {
        width: 300,
        height: 300,
    },
    qrCodeContainer: {
        alignItems: 'center',
    },
});
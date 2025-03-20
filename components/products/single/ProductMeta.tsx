import { Text, StyleSheet, View, Image } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import { useLocalSearchParams } from "expo-router";
import Accordion from "@/components/Accordion";
import QR from "./Meta/QR";
import Tags from "./Meta/Tags";
import InfoBox from "./Meta/InfoBox";
export default function ProductMeta() {

    const { id } = useLocalSearchParams();
    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View>

            <Tags id={Number(id)} />

            <View style={styles.infoBoxContainer}>
                <InfoBox title="Brand" icon="information-circle-outline" value={product?.brand || ""} />
                <InfoBox title="Category" icon="grid-outline" value={product?.category || ""} />
                <InfoBox title="Weight" icon="speedometer-outline" value={product?.weight?.toString() + " kg" || ""}/>
                <InfoBox title="SKU" icon="cart-outline" value={product?.sku || ""} />
                <InfoBox title="Availability Status" icon="information-circle-outline" value={product?.availabilityStatus || ""} />
                <InfoBox title="Min. Order" icon="information-circle-outline" value={product?.minimumOrderQuantity?.toString() || ""} />
                <InfoBox title="Dimensions" icon="resize" value={`${product?.dimensions?.width} x ${product?.dimensions?.height} x ${product?.dimensions?.depth}`} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    brand: {
        fontSize: 16,
    },
    category: {
        fontSize: 16,
    },
    infoBoxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    textRight: {
        textAlign: 'right',
    },
});
import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import { useLocalSearchParams } from "expo-router";
import Accordion from "@/components/Accordion";
import QR from "./Meta/QR";


export default function ProductOtherInfo() {
    const { id } = useLocalSearchParams();
    const product: Product | undefined = useProduct(Number(id));

    return (  
        <View>
            
            <Text style={styles.sectionTitle}>Important Information</Text>

            <Accordion title="Return Policy" content={<Text>{product?.returnPolicy}</Text>} />

            <Accordion title="Warranty Information" content={<Text>{product?.warrantyInformation}</Text>} />

            <Accordion title="Barcode" content={<Text>{product?.meta.barcode}</Text>} />

            <Accordion title="QR Code" content={<QR id={Number(id)} />} />

            <View style={styles.list}>
                <View style={[styles.listItem]}>
                    <Text style={styles.listItemTitle}>Updated At</Text>
                    <Text style={styles.listItemText}>{product?.meta.updatedAt ? new Date(product.meta.updatedAt).toLocaleDateString() : ''}</Text>
                </View>

                <View style={styles.listItem}>
                    <Text style={[styles.listItemTitle, styles.textRight]}>Created At</Text>
                    <Text style={[styles.listItemText, styles.textRight]}>{product?.meta.createdAt ? new Date(product.meta.createdAt).toLocaleDateString() : ''}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    listItem: {
        paddingVertical: 10,
    },
    list: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        opacity: 0.5,
    },
    listItemTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    listItemText: {
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    textRight: {
        textAlign: 'right',
    },
    
});
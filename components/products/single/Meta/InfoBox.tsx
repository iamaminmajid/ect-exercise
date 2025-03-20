import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function InfoBox({title, icon, value}: {
    title: string, 
    icon: keyof typeof Ionicons.glyphMap, 
    value: string
}) {


    return (  
        <View style={styles.infoBox}>
            <Ionicons name={icon} size={24} color="black" />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10,
        width: '48%',
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
    },
    infoBoxContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
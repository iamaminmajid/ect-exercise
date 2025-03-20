import { Text, StyleSheet, View } from "react-native";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";
import Ionicons from '@expo/vector-icons/Ionicons';

export interface InfoBoxProps {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    value: string;
}

export default function InfoBox({title, icon, value}: InfoBoxProps) {


    return (  
        <View style={styles.infoBox}>
            <Ionicons name={icon} size={24} color="black" testID="info-box-icon" />
            <View>
                <Text style={styles.title} testID="info-box-title">{title}</Text>
                <Text style={styles.value} testID="info-box-value">{value}</Text>
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
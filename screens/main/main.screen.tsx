import React from "react";
import {View} from "react-native";
import styles from "./main.styles";
import ProductsList from "@/components/products/ProductsList";
import WithSort from "@/components/withSort";
export default function Main() {
    

    return (
        <View style={styles.container}>
            <WithSort Component={ProductsList} />
        </View>
    );
}
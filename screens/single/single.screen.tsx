import React from "react";
import {View, ScrollView} from "react-native";
import styles from "./single.styles";
import ProductOverview from "@/components/products/single/ProductOverview";
import ProductMeta from "@/components/products/single/ProductMeta";
import ProductReviews from "@/components/products/single/ProductReviews";
import ProductOtherInfo from "@/components/products/single/ProductOtherInfo";
export default function Main() {
    

    return (
        <ScrollView>
            <View style={styles.container}>
                <ProductOverview/>
                <ProductMeta />
                <ProductReviews />
                <ProductOtherInfo />
            </View>
        </ScrollView>
    );
}
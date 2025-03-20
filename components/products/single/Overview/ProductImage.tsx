import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Product } from "@/constants/Types";
import { useProduct } from "@/constants/Context";


export default function ProductImage({id}: {id: number}) {

    const product: Product | undefined = useProduct(Number(id));

    const [selectedImage, setSelectedImage] = useState<string>(product?.images[0] || "");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (  
        <View>
            
            <View>
                <View style={styles.image}>
                    <Image
                        source={{ uri: selectedImage }} 
                        style={styles.image}
                        resizeMode="contain"
                        onLoadStart={() => setIsLoading(true)}
                        onLoadEnd={() => setIsLoading(false)}
                        onLoad={() => setIsLoading(false)}
                    />
                </View>
            </View>
            <View style={styles.thumbnailsContainer}>
                {product?.images.map((image: string) => (
                    <TouchableOpacity onPress={() => setSelectedImage(image)} key={image} style={[styles.thumbnailsImage, selectedImage === image && styles.thumbnailsImageSelected]}>
                        <Image source={{ uri: image }} style={[styles.thumbnailsImageInner, selectedImage === image && isLoading === true && styles.loadingImageIndicator]} />
                        {isLoading && selectedImage === image && <ActivityIndicator size="large" color="#333" style={styles.loadingIndicator} />}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnailsImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    thumbnailsImageSelected: {
        borderColor: '#000',
    },
    thumbnailsContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    loadingIndicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    loadingImageIndicator: {
        opacity: 0.3,
    },
    thumbnailsImageInner: {
        width: 100,
        height: 100,
    }
});
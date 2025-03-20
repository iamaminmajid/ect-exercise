import { FC, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function withSort({Component}: {Component: FC<any>}){

    const [sortOrder, setSortOrder] = useState<boolean>(false);

    const handleSort = () => {
        setSortOrder(!sortOrder);
    }

    return (
        <View style={{
            position: 'relative',
            width: '100%',
            marginTop: 35,
            // backgroundColor: 'red',
        }}>
            <TouchableOpacity onPress={handleSort} style={{
                position: 'absolute',
                right: 10,
                top: -30,
                width: 140,
                height: 40,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 10,
            }}>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                }}>Sort by</Text>
                {
                    sortOrder ? 
                    <FontAwesome5 name="sort-alpha-down" size={24} color="black" /> : 
                    <FontAwesome5 name="sort-alpha-up" size={24} color="black" />
                }
            </TouchableOpacity>
            <Component order={sortOrder} />
        </View>
    )
    
}


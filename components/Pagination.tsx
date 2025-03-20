import { Button, StyleSheet, View } from "react-native";
import { Pagination } from "../constants/Types";
import { useEffect, useState } from "react";


export default function PaginationButtons ({ paginationData, setPaginationData, itemsPerPage }: Pagination) {

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(paginationData.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginationData(paginationData.slice(startIndex, endIndex));
    }, [page, paginationData]);

    const nextPage = () => {
        if (page < Math.ceil(paginationData.length / itemsPerPage)) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    
    return (
        <View style={styles.paginationButtons}>
            <Button title="Previous" onPress={prevPage} disabled={page === 1} />
            <Button title="Next" onPress={nextPage} disabled={page === totalPages} />
        </View>
    );
}

const styles = StyleSheet.create({
    paginationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});
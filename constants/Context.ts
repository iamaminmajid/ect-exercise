import React, { createContext, useContext, useState } from 'react';
import { Product, ProductResponse } from './Types';

export const DataContext = createContext<ProductResponse | null>(null);

export const fetchData = async (): Promise<ProductResponse> => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
}

export const useData = () => useContext(DataContext);

export const useProduct = (id: Number) => {
    const data = useData();
    return data?.products.find((product: Product) => product.id === id);
}
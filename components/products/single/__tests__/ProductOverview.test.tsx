import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ProductOverview from '../ProductOverview';
import { useProduct } from '@/constants/Context';
import { useLocalSearchParams } from 'expo-router';
import ProductImage from '../overview/ProductImage';
import Ratings from '../overview/Ratings';
import Price from '../overview/Price';
import AddToCart from '../overview/AddToCart';


jest.mock('@/constants/Context');
jest.mock('expo-router');
jest.mock('../overview/ProductImage', () => 'ProductImage');
jest.mock('../overview/Ratings', () => 'Ratings');
jest.mock('../overview/Price', () => 'Price');
jest.mock('../overview/AddToCart', () => 'AddToCart');

describe('ProductOverview', () => {
    const mockProduct = {
        id: 1,
        title: 'Test Product',
        description: 'Test Description',
        stock: 5,
        price: 99.99,
        // ... other product properties
    };

    beforeEach(() => {
        // Mock useLocalSearchParams
        (useLocalSearchParams as jest.Mock).mockReturnValue({ id: '1' });
        // Mock useProduct
        (useProduct as jest.Mock).mockReturnValue(mockProduct);
    });

    it('renders product details correctly', () => {
        render(<ProductOverview />);
        
        expect(screen.getByTestId('product-title')).toHaveTextContent('Test Product');
        expect(screen.getByTestId('product-description')).toHaveTextContent('Test Description');
        expect(screen.getByTestId('stock-warning')).toHaveTextContent('Only 5 left in stock');
    });

    it('shows stock warning when stock is less than 10', () => {
        render(<ProductOverview />);
        
        expect(screen.getByTestId('stock-warning')).toHaveTextContent('Only 5 left in stock');
    });

    it('does not show stock warning when stock is 10 or more', () => {
        const highStockProduct = { ...mockProduct, stock: 15 };
        (useProduct as jest.Mock).mockReturnValue(highStockProduct);
        
        render(<ProductOverview />);
        
        expect(screen.queryByTestId('stock-warning')).toBeNull();
    });

    it('does not show stock warning when stock is undefined', () => {
        const noStockProduct = { ...mockProduct, stock: undefined };
        (useProduct as jest.Mock).mockReturnValue(noStockProduct);
        
        render(<ProductOverview />);
        
        expect(screen.queryByTestId('stock-warning')).toBeNull();
    });

    it('renders child components with correct props', () => {
        const { UNSAFE_root } = render(<ProductOverview />);
        
        const productImage = UNSAFE_root.findByType(ProductImage);
        const ratings = UNSAFE_root.findByType(Ratings); 
        const price = UNSAFE_root.findByType(Price);
        const addToCart = UNSAFE_root.findByType(AddToCart);

        expect(productImage.props.id).toBe(1);
        expect(ratings.props.id).toBe(1);
        expect(price.props.id).toBe(1);
        expect(addToCart.props.id).toBe(1);
    });
}); 
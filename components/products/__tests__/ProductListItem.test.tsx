import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductListItem from '../ProductListItem';
import { router } from 'expo-router';
import { Product } from '@/constants/Types';
import { TouchableOpacity } from 'react-native';
// Mock expo-router
jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons/Feather', () => 'Icon');

// Mock expo-font
jest.mock('expo-font', () => ({
  isLoaded: jest.fn(() => true),
  loadAsync: jest.fn(),
}));

// Mock sample product data
const mockProduct: Product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: [
        "beauty",
        "mascara"
    ],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
        {
            rating: 2,
            comment: "Very unhappy with my purchase!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "John Doe",
            reviewerEmail: "john.doe@x.dummyjson.com"
        },
        {
            rating: 2,
            comment: "Not as described!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Nolan Gonzalez",
            reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
        },
        {
            rating: 5,
            comment: "Very satisfied!",
            date: "2024-05-23T08:56:21.618Z",
            reviewerName: "Scarlett Wright",
            reviewerEmail: "scarlett.wright@x.dummyjson.com"
        }
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
};

describe('ProductListItem', () => {
  beforeEach(() => {
    // Clear mock calls between tests
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    const { getByTestId } = render(
      <ProductListItem item={mockProduct} />
    );

    // Check if all product information is displayed
    expect(getByTestId('product-title')).toHaveTextContent(mockProduct.title);
    expect(getByTestId('product-price')).toHaveTextContent(`$${mockProduct.price}`);
    expect(getByTestId('product-rating')).toHaveTextContent(mockProduct.rating.toString());
    expect(getByTestId('product-stock')).toHaveTextContent(`Only ${mockProduct.stock} left`);
  });

  it('navigates to product details when pressed', () => {
    const { getByTestId, UNSAFE_root } = render(
      <ProductListItem item={mockProduct} />
    );

    // Simulate press on the product card
    fireEvent.press(UNSAFE_root.findByType(TouchableOpacity));

    // Verify router.push was called with correct parameters
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/single',
      params: {
        id: mockProduct.id,
      },
    });
  });

  it('displays product image with correct source', () => {
    const { getByTestId } = render(
      <ProductListItem item={mockProduct} />
    );

    const productImage = getByTestId('product-image');
    expect(productImage.props.source.uri).toBe(mockProduct.thumbnail);
  });
}); 
import React from 'react';
import { render } from '@testing-library/react-native';
import InfoBox from '../single/meta/InfoBox';
import { InfoBoxProps } from '../single/meta/InfoBox';
// Mock @expo/vector-icons
jest.mock('@expo/vector-icons/Ionicons', () => ({
  __esModule: true,
  default: 'Ionicons',
}));

describe('InfoBox', () => {
  const defaultProps: InfoBoxProps = {
    title: 'Weight',
    icon: 'grid-outline',
    value: '0.5 kg',
  };

  it('renders correctly with all props', () => {
    const { getByTestId } = render(<InfoBox {...defaultProps} />);

    // Check if all elements are rendered
    expect(getByTestId('info-box-icon')).toBeTruthy();
    expect(getByTestId('info-box-title')).toBeTruthy();
    expect(getByTestId('info-box-value')).toBeTruthy();
  });

  it('displays correct title and value', () => {
    const { getByText } = render(<InfoBox {...defaultProps} />);

    expect(getByText('Weight')).toBeTruthy();
    expect(getByText('0.5 kg')).toBeTruthy();
  });

  it('renders with correct styling', () => {
    const { getByTestId } = render(<InfoBox {...defaultProps} />);

    const infoBox = getByTestId('info-box-title');
    expect(infoBox.props.style).toEqual(
      expect.objectContaining({
        fontSize: 12,
        fontWeight: 'bold',
      })
    );
  });

  it('renders with empty value', () => {
    const props: InfoBoxProps = {
      ...defaultProps,
      value: '',
    };
    const { getByTestId } = render(<InfoBox {...props} />);

    const valueElement = getByTestId('info-box-value');
    expect(valueElement.props.children).toBe('');
  });

  it('renders with a different icon', () => {
    const props: InfoBoxProps = {
      ...defaultProps,
      icon: 'cart',
    };
    const { getByTestId } = render(<InfoBox {...props} />);

    const iconElement = getByTestId('info-box-icon');
    expect(iconElement.props.name).toBe('cart');
  });
}); 
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Products from './Products';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

const mockProducts = [
  { id: 1, title: 'Ürün 1', price: '9.99', image: '/image1.jpg', category: 'electronics' },
  { id: 2, title: 'Ürün 2', price: '20.99', image: '/image2.jpg', category: 'jewelery' },
];

describe('Products Component Tests', () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: mockProducts });
  });

  test('products are fetched and displayed after loading', async () => {
    render(<Products />);
    await waitFor(() => {
      const productElements = screen.getAllByText(/Ürün/);
      expect(productElements).toHaveLength(mockProducts.length);
    });
  });

  test('products are filtered by category', async () => {
    render(<Products />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'electronics' } });

    await waitFor(() => {
      expect(screen.getByText('Ürün 1')).toBeInTheDocument();
    });

    // Ayrı waitFor kullanımı
    await waitFor(() => {
      expect(screen.queryByText('Ürün 2')).not.toBeInTheDocument();
    });
  });

  test('all products are displayed when "All" category is selected', async () => {
    render(<Products />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'All' } });

    // Her beklenen element için ayrı waitFor kullanımı
    await waitFor(() => {
      expect(screen.getByText('Ürün 1')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Ürün 2')).toBeInTheDocument();
    });
  });
});

describe('Products Component Snapshot Test', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Products />);
    expect(asFragment()).toMatchSnapshot();
  });
});

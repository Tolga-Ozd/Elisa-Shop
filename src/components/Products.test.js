import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Products from '../components/Products';

jest.mock('axios');

const mockProducts = [
  { id: 1, title: 'Ürün 1', price: 10, image: '/image1.jpg', category: 'electronics' },
  { id: 2, title: 'Ürün 2', price: 20, image: '/image2.jpg', category: 'jewelery' },
];

describe('Products Component Tests', () => {
    test('products are fetched and displayed after loading', async () => {
        axios.get.mockResolvedValue({ data: mockProducts });
        render(<Products />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        await waitFor(() => {
          const productElements = screen.getAllByText(/Ürün/);
          expect(productElements).toHaveLength(mockProducts.length);
        });
      });
      

      test('products are filtered by category', async () => {
        axios.get.mockResolvedValue({ data: mockProducts });
        render(<Products />);
        
        await waitFor(() => {
          expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
        });
        
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'electronics' } });
      
        // 'Ürün 1'in ekranda olduğunu kontrol et
        await waitFor(() => {
          expect(screen.getByText('Ürün 1')).toBeInTheDocument();
        });
      
        // 'Ürün 2'nin ekranda olmadığını kontrol et
        await waitFor(() => {
          expect(screen.queryByText('Ürün 2')).not.toBeInTheDocument();
        });
      });
      

      test('all products are displayed when "All" category is selected', async () => {
        axios.get.mockResolvedValue({ data: mockProducts });
        render(<Products />);
        await waitFor(() => {
          expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
        });
      
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'All' } });
      
        // 'Ürün 1'in ekranda olduğunu kontrol et
        await waitFor(() => {
          expect(screen.getByText('Ürün 1')).toBeInTheDocument();
        });
      
        // 'Ürün 2'nin ekranda olduğunu kontrol et
        await waitFor(() => {
          expect(screen.getByText('Ürün 2')).toBeInTheDocument();
        });
      });
      
});

describe('Products Component Snapshot Test', () => {
    // Snapshot test 
    it('should match the snapshot', () => {
      const { asFragment } = render(<Products />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

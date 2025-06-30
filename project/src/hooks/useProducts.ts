import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/product';

const API_BASE = 'https://fakestoreapi.com';

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCategories = () => {
  return useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/products/categories`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return response.json();
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
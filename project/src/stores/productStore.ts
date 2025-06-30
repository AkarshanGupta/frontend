import { create } from 'zustand';

interface ProductStore {
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  clearFilters: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  searchQuery: '',
  selectedCategory: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
  clearFilters: () => set({ searchQuery: '', selectedCategory: '' }),
}));
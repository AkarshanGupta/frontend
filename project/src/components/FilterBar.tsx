import React from 'react';
import { X, Filter } from 'lucide-react';
import { useProductStore } from '../stores/productStore';
import { useCategories } from '../hooks/useProducts';

export const FilterBar: React.FC = () => {
  const { selectedCategory, setSelectedCategory, clearFilters, searchQuery } = useProductStore();
  const { data: categories, isLoading } = useCategories();

  const hasActiveFilters = selectedCategory || searchQuery;

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={isLoading}
            >
              <option value="">All Categories</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
import React, { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { ProductModal } from './ProductModal';
import { ErrorMessage } from './ErrorMessage';
import { useProducts } from '../hooks/useProducts';
import { useProductStore } from '../stores/productStore';
import { Product } from '../types/product';

export const ProductGrid: React.FC = () => {
  const { data: products, isLoading, error, refetch } = useProducts();
  const { searchQuery, selectedCategory } = useProductStore();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage
          message="Failed to load products. Please try again."
          onRetry={() => refetch()}
          className="min-h-[400px]"
        />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {searchQuery || selectedCategory ? 'Filtered Products' : 'All Products'}
          </h2>
          <span className="text-sm text-gray-500">
            {isLoading ? 'Loading...' : `${filteredProducts.length} products`}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }, (_, i) => <ProductCardSkeleton key={i} />)
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
        </div>

        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          productId={selectedProduct.id}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};
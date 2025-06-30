import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';
import { useProduct } from '../hooks/useProducts';
import { useCartStore } from '../stores/cartStore';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

interface ProductModalProps {
  productId: number;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ productId, onClose }) => {
  const { data: product, isLoading, error } = useProduct(productId);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          )}

          {error && (
            <ErrorMessage
              message="Failed to load product details"
              className="py-12"
            />
          )}

          {product && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h1>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating.rate}</span>
                  </div>
                  <span className="text-gray-500">({product.rating.count} reviews)</span>
                </div>

                <div className="text-3xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
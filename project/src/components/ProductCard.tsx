import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types/product';
import { useCartStore } from '../stores/cartStore';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
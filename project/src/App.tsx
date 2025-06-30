import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ProductGrid } from './components/ProductGrid';
import { AddProductForm } from './components/AddProductForm';
import { Footer } from './components/Footer';
import { Plus, Grid3X3 } from 'lucide-react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

type Tab = 'products' | 'add-product';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('products');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Grid3X3 className="w-4 h-4" />
                  Products
                </div>
              </button>
              <button
                onClick={() => setActiveTab('add-product')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'add-product'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Product
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'products' && (
          <>
            <FilterBar />
            <ProductGrid />
          </>
        )}
        
        {activeTab === 'add-product' && <AddProductForm />}
        
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
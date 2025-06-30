# Shopper - Modern E-commerce Application

A fully responsive, modern e-commerce product listing application built with React, TypeScript, and Tailwind CSS. Features real-time search, filtering, shopping cart functionality, and a beautiful user interface.

![Shopper App](https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

### 🛍️ Product Management
- **Product Grid**: Responsive grid layout displaying products with images, titles, prices, and ratings
- **Product Details**: Detailed modal view with full product information
- **Add Product Form**: Mock form for adding new products with validation
- **Real-time Search**: Filter products by name as you type
- **Category Filtering**: Filter products by categories fetched from API

### 🛒 Shopping Cart
- **Add to Cart**: One-click add to cart functionality
- **Cart Management**: View, update quantities, and remove items
- **Persistent Storage**: Cart state persists across browser sessions
- **Real-time Updates**: Live cart count and total price calculation

### 🎨 User Experience
- **Responsive Design**: Mobile-first approach, works on all device sizes
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error messages with retry options
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Proper focus states and keyboard navigation

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: Fake Store API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── AddProductForm.tsx
│   ├── Cart.tsx
│   ├── ErrorMessage.tsx
│   ├── FilterBar.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LoadingSpinner.tsx
│   ├── ProductCard.tsx
│   ├── ProductCardSkeleton.tsx
│   ├── ProductGrid.tsx
│   └── ProductModal.tsx
├── hooks/               # Custom React hooks
│   └── useProducts.ts
├── stores/              # Zustand state stores
│   ├── cartStore.ts
│   └── productStore.ts
├── types/               # TypeScript type definitions
│   └── product.ts
├── utils/               # Utility functions
│   └── validation.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) for product data:

- **Products**: `https://fakestoreapi.com/products`
- **Categories**: `https://fakestoreapi.com/products/categories`
- **Single Product**: `https://fakestoreapi.com/products/{id}`

## 🎯 Key Features Implementation

### State Management
- **Product Store**: Manages search queries and category filters
- **Cart Store**: Handles cart items with persistent storage
- **React Query**: Efficient data fetching with caching and background updates

### Form Validation
```typescript
const productSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  price: z.number().positive("Price must be positive"),
  description: z.string().min(10, "Description too short"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Valid image URL required")
})
```

### Responsive Design
- **Mobile**: Single column layout
- **Tablet**: 2-column grid
- **Desktop**: 3-4 column grid
- **Touch-friendly**: Optimized for mobile interactions

## 🎨 Design System

### Colors
- **Primary**: Blue (`blue-600`, `blue-700`)
- **Success**: Green (`green-600`, `green-50`)
- **Error**: Red (`red-500`, `red-600`)
- **Neutral**: Gray scale (`gray-50` to `gray-900`)

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body**: Readable line heights and spacing
- **Interactive**: Hover states and transitions

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering (price range, ratings)
- [ ] Product comparison
- [ ] Order history and tracking
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Dark mode theme
- [ ] Internationalization (i18n)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Pexels](https://pexels.com/) for stock images
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Built with ❤️ using React and TypeScript**

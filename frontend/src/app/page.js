'use client';

import { useState } from 'react';
import { Search, ShoppingBag, Star, Heart, Filter, Grid, List, User, Bell, Menu, X, Sparkles, TrendingUp, Tag, Award } from 'lucide-react';



export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items', icon: Grid },
    { id: 'dresses', name: 'Dresses', icon: Sparkles },
    { id: 'tops', name: 'Tops & Shirts', icon: TrendingUp },
    { id: 'bottoms', name: 'Bottoms', icon: Tag },
    { id: 'accessories', name: 'Accessories', icon: Award },
    { id: 'shoes', name: 'Shoes', icon: Star }
  ];

  const products = [
    {
      id: 1,
      name: 'Vintage Floral Dress',
      price: 45,
      originalPrice: 89,
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/400',
      category: 'dresses',
      seller: 'Sarah M.',
      condition: 'Like New',
      tags: ['Vintage', 'Summer', 'Floral']
    },
    {
      id: 2,
      name: 'Designer Denim Jacket',
      price: 65,
      originalPrice: 120,
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/400',
      category: 'tops',
      seller: 'Mike D.',
      condition: 'Excellent',
      tags: ['Designer', 'Denim', 'Classic']
    },
    {
      id: 3,
      name: 'Leather Ankle Boots',
      price: 55,
      originalPrice: 110,
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/300/400',
      category: 'shoes',
      seller: 'Emma K.',
      condition: 'Good',
      tags: ['Leather', 'Boots', 'Winter']
    },
    {
      id: 4,
      name: 'Silk Scarf Collection',
      price: 25,
      originalPrice: 60,
      rating: 4.6,
      reviews: 78,
      image: '/api/placeholder/300/400',
      category: 'accessories',
      seller: 'Lisa R.',
      condition: 'Like New',
      tags: ['Silk', 'Luxury', 'Accessories']
    },
    {
      id: 5,
      name: 'High-Waist Jeans',
      price: 38,
      originalPrice: 85,
      rating: 4.8,
      reviews: 203,
      image: '/api/placeholder/300/400',
      category: 'bottoms',
      seller: 'Alex T.',
      condition: 'Excellent',
      tags: ['Denim', 'High-Waist', 'Trendy']
    },
    {
      id: 6,
      name: 'Cashmere Sweater',
      price: 72,
      originalPrice: 150,
      rating: 4.9,
      reviews: 91,
      image: '/api/placeholder/300/400',
      category: 'tops',
      seller: 'Rachel S.',
      condition: 'Like New',
      tags: ['Cashmere', 'Luxury', 'Cozy']
    },
    {
      id: 7,
      name: 'Statement Necklace',
      price: 22,
      originalPrice: 45,
      rating: 4.5,
      reviews: 67,
      image: '/api/placeholder/300/400',
      category: 'accessories',
      seller: 'Maya P.',
      condition: 'Good',
      tags: ['Statement', 'Jewelry', 'Bold']
    },
    {
      id: 8,
      name: 'Cocktail Dress',
      price: 85,
      originalPrice: 180,
      rating: 4.9,
      reviews: 145,
      image: '/api/placeholder/300/400',
      category: 'dresses',
      seller: 'Nina W.',
      condition: 'Excellent',
      tags: ['Cocktail', 'Formal', 'Elegant']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background - Same as Registration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-center opacity-30" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}
          />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-xl bg-white/10 border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">ReWear</h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Browse</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Sell</a>
                <a href="/register" className="text-white/80 hover:text-white transition-colors">Register</a>
              </nav>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                <button className="p-2 text-white/80 hover:text-white transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-white/80 hover:text-white transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button 
                  className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden backdrop-blur-xl bg-white/10 border-b border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Browse</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Sell</a>
              <a href="/register" className="block text-white/80 hover:text-white transition-colors">register</a>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Discover Pre-Loved
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Fashion Treasures
                </span>
              </h2>
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center rotate-12">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Shop sustainable fashion and give pre-loved clothes a new life. Find unique pieces while helping the planet.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search for clothes, accessories, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-lg text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Categories Section */}
          <section className="mb-12">
            <div className="backdrop-blur-xl bg-white/10 p-6 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Shop by Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-400 text-white'
                          : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">{category.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Filters and View Toggle */}
          <section className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-white/70">{filteredProducts.length} items</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Product Listings */}
          <section>
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-white/30" />
                    </div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                    </button>
                    
                    {/* Condition Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      {product.condition}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold text-lg leading-tight">{product.name}</h4>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-3">by {product.seller}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white/80 text-sm">{product.rating}</span>
                      </div>
                      <span className="text-white/60 text-sm">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white font-bold text-xl">${product.price}</span>
                      <span className="text-white/60 line-through text-sm">${product.originalPrice}</span>
                      <span className="text-green-400 text-sm font-medium">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
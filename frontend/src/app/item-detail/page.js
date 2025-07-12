

'use client';

import { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, Gift, MessageCircle, User, MapPin, Clock, Shield, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Sparkles, Award, Tag, TrendingUp } from 'lucide-react';

export default function ItemDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const item = {
    id: 1,
    name: 'Pre-Loved Vintage Floral Dress',
    description: 'This beautiful vintage floral dress is perfect for summer occasions. Made from high-quality cotton with a timeless design that never goes out of style. The dress features a flattering A-line silhouette with a fitted bodice and flowing skirt. The floral pattern is vibrant and cheerful, making it perfect for garden parties, brunches, or casual outings. The dress has been carefully maintained and shows minimal signs of wear.',
    fullDescription: 'This exquisite vintage floral dress is a true treasure from the 1970s era. Crafted from premium cotton blend fabric, it features an intricate botanical print in shades of pink, blue, and green against a cream background. The dress boasts a classic A-line silhouette with a fitted bodice that accentuates the waist, complemented by a flowing midi-length skirt that moves beautifully. The three-quarter sleeves add an elegant touch while providing comfortable coverage. Details include a concealed back zipper, fully lined interior, and delicate button accents at the cuffs. This piece has been professionally cleaned and stored in a smoke-free environment. Perfect for someone who appreciates vintage fashion and sustainable style choices.',
    points: 450,
    originalPoints: 890,
    rating: 4.8,
    reviews: 124,
    condition: 'Like New',
    size: 'Medium (US 8-10)',
    brand: 'Vintage Collection',
    category: 'Dresses',
    tags: ['Vintage', 'Summer', 'Floral', 'Sustainable', 'Cotton', 'A-line', 'Midi'],
    availability: 'Available',
    location: 'New York, NY',
    uploadedDate: '2 days ago',
    seller: {
      name: 'EcoFashion_Sarah',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e7?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      totalSales: 156,
      joinedDate: 'March 2023',
      badges: ['Verified Seller', 'Eco Warrior', 'Top Rated'],
      bio: 'Passionate about sustainable fashion and giving pre-loved clothes a second life. All items are carefully curated and professionally cleaned.'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop',
        title: 'Front View',
        description: 'Beautiful front view showcasing the elegant floral pattern and A-line silhouette. The dress features a flattering fitted bodice that flows into a graceful midi-length skirt.'
      },
      {
        url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
        title: 'Side Profile',
        description: 'Side profile highlighting the perfect fit and drape of the dress. Notice the three-quarter sleeves and the way the fabric falls naturally for a timeless look.'
      },
      {
        url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop',
        title: 'Back Details',
        description: 'Back view showing the concealed zipper and the full coverage design. The dress maintains its elegant silhouette from every angle.'
      },
      {
        url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop',
        title: 'Fabric Close-up',
        description: 'Close-up view of the intricate floral pattern and high-quality cotton fabric. The vibrant colors and detailed botanical design make this piece truly special.'
      }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const handleAction = (action) => {
    setSelectedAction(action);
    // Here you would implement the actual functionality
    console.log(`Selected action: ${action}`);
  };

  // Get current image object
  const currentImage = item.images[currentImageIndex];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
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

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="backdrop-blur-xl bg-white/10 border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <button className="p-2 text-white/80 hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-lg font-semibold text-white">Item Details</h1>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 text-white/80 hover:text-white transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                <button className="p-2 text-white/80 hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden group">
                <img 
                  src={currentImage.url} 
                  alt={currentImage.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    console.error('Image failed to load:', currentImage.url);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback if image fails */}
                <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <Gift className="w-16 h-16 text-white/30 mx-auto mb-2" />
                    <p className="text-white/50 text-sm">Image {currentImageIndex + 1}</p>
                  </div>
                </div>
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {currentImageIndex + 1} / {item.images.length}
                </div>
                
                {/* Condition Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                  {item.condition}
                </div>
              </div>
              
              {/* Image Title and Description */}
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{currentImage.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{currentImage.description}</p>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                      currentImageIndex === index 
                        ? 'border-purple-400 shadow-lg shadow-purple-400/25' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center text-white/50 text-xs" style={{display: 'none'}}>
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Item Information */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{item.name}</h2>
                    <p className="text-white/80">{item.brand} • {item.size}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                    item.availability === 'Available' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    <CheckCircle className="w-4 h-4" />
                    {item.availability}
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-medium">{item.rating}</span>
                  </div>
                  <span className="text-white/60">({item.reviews} reviews)</span>
                </div>
                
                {/* Points */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Gift className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-bold text-3xl">{item.points}</span>
                    <span className="text-white/80">points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 line-through text-lg">{item.originalPoints} pts</span>
                    <span className="text-green-400 font-medium bg-green-500/20 px-2 py-1 rounded-full text-sm">
                      {Math.round((1 - item.points / item.originalPoints) * 100)}% off
                    </span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAction('redeem')}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                  >
                    <Gift className="w-5 h-5" />
                    Redeem via Points
                  </button>
                  <button 
                    onClick={() => handleAction('swap')}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Swap Request
                  </button>
                </div>
              </div>

              {/* Seller Information */}
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Seller Information
                </h3>
                <div className="flex items-start gap-4">
                  <img 
                    src={item.seller.avatar} 
                    alt={item.seller.name}
                    className="w-16 h-16 rounded-full border-2 border-white/20"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center" style={{display: 'none'}}>
                    <User className="w-8 h-8 text-white/30" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-semibold">{item.seller.name}</h4>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white/80 text-sm">{item.seller.rating}</span>
                      </div>
                      <span className="text-white/60 text-sm">{item.seller.totalSales} sales</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.seller.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/70 text-sm mb-3">{item.seller.bio}</p>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Joined {item.seller.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Item Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Category</span>
                    <span className="text-white font-medium">{item.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Brand</span>
                    <span className="text-white font-medium">{item.brand}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Size</span>
                    <span className="text-white font-medium">{item.size}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Condition</span>
                    <span className="text-white font-medium">{item.condition}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white/70">Listed</span>
                    <span className="text-white font-medium">{item.uploadedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-8 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Product Description
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                {showFullDescription ? item.fullDescription : item.description}
              </p>
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-lg font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

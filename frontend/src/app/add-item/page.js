'use client';

import React, { useState } from 'react';
import { Upload, X, Plus, Tag, AlertCircle, ArrowLeft, Heart, Share2 } from 'lucide-react';

export default function AddNewItemPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    size: '',
    condition: '',
    tags: []
  });
  
  const [images, setImages] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [errors, setErrors] = useState({});

  const categories = [
    'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Shoes', 
    'Accessories', 'Activewear', 'Formal wear', 'Sleepwear'
  ];

  const types = [
    'T-shirt', 'Shirt', 'Blouse', 'Jeans', 'Trousers', 'Skirt', 
    'Dress', 'Jacket', 'Coat', 'Sneakers', 'Boots', 'Sandals', 
    'Hat', 'Bag', 'Belt', 'Scarf'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const conditions = [
    'New with tags',
    'Like new',
    'Very good',
    'Good',
    'Fair',
    'Poor'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      setErrors(prev => ({
        ...prev,
        images: 'Maximum 5 images allowed'
      }));
      return;
    }
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            file: file,
            url: e.target.result,
            name: file.name
          }]);
        };
        reader.readAsDataURL(file);
      }
    });
    
    setErrors(prev => ({
      ...prev,
      images: ''
    }));
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.type) newErrors.type = 'Type is required';
    if (!formData.size) newErrors.size = 'Size is required';
    if (!formData.condition) newErrors.condition = 'Condition is required';
    if (images.length === 0) newErrors.images = 'At least one image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit logic here
      console.log('Form submitted:', { ...formData, images });
      alert('Item submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Add New Item</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 shadow-2xl">
          <div className="mb-6">
            <p className="text-white/80 text-lg">Share your unused clothing with the ReWear community</p>
          </div>

          <div className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-3">
                Images <span className="text-red-400">*</span>
              </label>
              <div className="border-2 border-dashed border-white/30 rounded-2xl p-6 hover:border-white/50 transition-colors bg-white/5">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center justify-center py-6"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-white/70" />
                  </div>
                  <p className="text-white/80 text-lg mb-2">
                    Click to upload images
                  </p>
                  <p className="text-white/60 text-sm">
                    PNG, JPG, GIF up to 10MB each (max 5 images)
                  </p>
                </label>
              </div>
              {errors.images && (
                <div className="flex items-center mt-3 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {errors.images}
                </div>
              )}
              
              {images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {images.map((image) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-32 object-cover rounded-2xl border border-white/20"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-3">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50 ${
                  errors.title ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="e.g., Pre-Loved Vintage Floral Dress"
              />
              {errors.title && (
                <div className="flex items-center mt-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {errors.title}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-3">
                Description <span className="text-red-400">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50 resize-none ${
                  errors.description ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="Describe your item in detail... Share the story behind this piece!"
              />
              {errors.description && (
                <div className="flex items-center mt-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {errors.description}
                </div>
              )}
            </div>

            {/* Category and Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-3">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white ${
                    errors.category ? 'border-red-400' : 'border-white/30'
                  }`}
                >
                  <option value="" className="bg-purple-900">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-purple-900">{cat}</option>
                  ))}
                </select>
                {errors.category && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.category}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-3">
                  Type <span className="text-red-400">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white ${
                    errors.type ? 'border-red-400' : 'border-white/30'
                  }`}
                >
                  <option value="" className="bg-purple-900">Select type</option>
                  {types.map(type => (
                    <option key={type} value={type} className="bg-purple-900">{type}</option>
                  ))}
                </select>
                {errors.type && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.type}
                  </div>
                )}
              </div>
            </div>

            {/* Size and Condition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-3">
                  Size <span className="text-red-400">*</span>
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white ${
                    errors.size ? 'border-red-400' : 'border-white/30'
                  }`}
                >
                  <option value="" className="bg-purple-900">Select size</option>
                  {sizes.map(size => (
                    <option key={size} value={size} className="bg-purple-900">{size}</option>
                  ))}
                </select>
                {errors.size && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.size}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-3">
                  Condition <span className="text-red-400">*</span>
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white ${
                    errors.condition ? 'border-red-400' : 'border-white/30'
                  }`}
                >
                  <option value="" className="bg-purple-900">Select condition</option>
                  {conditions.map(condition => (
                    <option key={condition} value={condition} className="bg-purple-900">{condition}</option>
                  ))}
                </select>
                {errors.condition && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.condition}
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-3">
                Tags
              </label>
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-white/50"
                  placeholder="Add a tag (e.g., vintage, summer, floral)"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl transition-colors"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {formData.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-white/80 hover:text-white transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                List Item
              </button>
              <button
                type="button"
                className="px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-2xl transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

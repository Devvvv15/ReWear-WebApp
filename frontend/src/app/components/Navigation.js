'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBag, User, Bell, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setShowMobileMenu(false); // Close mobile menu after navigation
  };

  return (
    <header className="backdrop-blur-xl bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">ReWear</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/user')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Profile
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleNavigation('/user')}
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
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

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => handleNavigation('/')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/user')}
              className="block w-full text-left text-white/80 hover:text-white transition-colors"
            >
              Profile
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
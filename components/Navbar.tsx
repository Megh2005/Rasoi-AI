'use client';

import { UserButton } from '@clerk/nextjs';
import { ChefHat, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-orange-100 px-6 py-4 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left section - Logo and branding */}
        <Link href="/" className="flex items-center gap-4 flex-1">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <ChefHat className="w-7 h-7 text-white" />
            </div>

          </div>
          <div className="hidden md:block">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">AI-Powered</p>
            <p className="text-sm text-gray-600 -mt-1">Recipe Generator</p>
          </div>
        </Link>

        {/* Center section - Main title */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent hover:from-orange-500 hover:via-red-500 hover:to-pink-500 transition-all duration-300 cursor-default">
            Rasoi AI
          </h1>
          <p className="text-sm hidden sm:inline-block font-medium text-gray-500 uppercase">Your Personal Indian Recipe Assistant</p>
        </div>

        {/* Right section - User button */}
        <div className="flex-1 flex justify-end items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur"></div>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: 'w-12 h-12 md:w-14 md:h-14 relative z-10 ring-2 ring-white shadow-lg hover:shadow-xl transition-all duration-300',
                  userButtonPopoverCard: 'shadow-2xl border border-gray-100 rounded-xl backdrop-blur-sm bg-white/95',
                  userButtonPopoverHeader: 'bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-100',
                  userButtonPopoverFooter: 'bg-gray-50/50 border-t border-gray-100',
                  userButtonPopoverActionButton: 'hover:bg-orange-50 transition-colors duration-200',
                  userButtonPopoverActionButtonIcon: 'text-orange-600',
                  userButtonPopoverActionButtonText: 'text-gray-700 font-medium'
                },
              }}
            />
          </div>

          {/* Optional: User greeting */}
          <div className="hidden lg:block ml-3">
            <p className="text-sm font-medium text-gray-700">Welcome back!</p>
            <p className="text-xs text-gray-500">Ready to cook?</p>
          </div>
        </div>
      </div>

      {/* Animated border bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
    </nav>
  );
}
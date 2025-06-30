'use client';

import { ChefHat, Home, Star, Plus, Menu, X, CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const FloatingDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && isMobile) {
        const menu = document.getElementById('mobile-menu');
        const button = document.getElementById('mobile-menu-button');
        if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isOpen]);

  const dockItems = [
    {
      icon: Home,
      label: 'Home',
      href: '/',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-400 to-blue-500'
    },
    {
      icon: Star,
      label: 'Featured',
      href: '/featured',
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'from-amber-400 to-amber-500'
    },
    {
      icon: Plus,
      label: 'Create Recipe',
      href: '/create',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'from-indigo-400 to-indigo-500'
    },
    {
      icon: CircleUserRound,
      label: 'Profile',
      href: '/profile',
      color: 'from-slate-500 to-slate-600',
      hoverColor: 'from-slate-400 to-slate-500'
    }
  ];

  const getIconScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === index) return 1.3;
    const distance = Math.abs(typeof hoveredIndex === 'number' ? hoveredIndex - index : 0);
    if (distance === 1) return 1.15;
    if (distance === 2) return 1.05;
    return 1;
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Marble Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(240, 240, 245, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(250, 250, 255, 0.7) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(248, 250, 252, 0.95) 0%, 
              rgba(241, 245, 249, 0.9) 25%, 
              rgba(236, 240, 246, 0.85) 50%, 
              rgba(248, 250, 252, 0.9) 75%, 
              rgba(255, 255, 255, 0.95) 100%
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(200, 200, 210, 0.03) 2px,
              rgba(200, 200, 210, 0.03) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 3px,
              rgba(180, 180, 190, 0.02) 3px,
              rgba(180, 180, 190, 0.02) 6px
            )
          `,
          backgroundSize: '400px 400px, 600px 600px, 500px 500px, 100% 100%, 20px 20px, 30px 30px'
        }}
      />

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        {/* Mobile Navigation */}
        {isMobile ? (
          <div className="relative">
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className={`w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'ring-4 ring-white/30' : ''
                }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="relative">
                <Menu
                  className={`w-8 h-8 text-white transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                />
                <X
                  className={`w-8 h-8 text-white absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    }`}
                />
              </div>
            </button>

            {/* Expanded Menu */}
            <div
              id="mobile-menu"
              className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isOpen
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                }`}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 min-w-[280px]">
                {/* Rasoi Logo */}
                <div className="flex justify-center mb-6">
                  <Link
                    href="/"
                    className="flex flex-col items-center group"
                    onClick={handleMenuItemClick}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mb-3 transition-all duration-200 group-active:scale-95">
                      <ChefHat className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-800">Rasoi</span>
                  </Link>
                </div>

                {/* Navigation Items Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {dockItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex flex-col items-center p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 active:scale-95"
                      onClick={handleMenuItemClick}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg mb-2 transition-all duration-200`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium text-center leading-tight">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Dock */
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 px-8 py-5 transition-all duration-500 hover:shadow-3xl">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl opacity-70 animate-pulse"></div>

            <div className="relative flex items-end gap-6">
              {/* Main Logo/Brand Icon */}
              <Link href="/" className="group relative flex flex-col items-center">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-125 hover:shadow-3xl"
                  style={{ transform: `scale(${hoveredIndex === 'logo' ? 1.25 : 1})` }}
                  onMouseEnter={() => setHoveredIndex('logo')}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ChefHat className="w-8 h-8 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                </div>
                {hoveredIndex === 'logo' && (
                  <div className="absolute -top-20 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg transform animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="relative">
                      Rasoi
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-orange-600 to-red-600 rotate-45 -mt-1.5"></div>
                    </div>
                  </div>
                )}
              </Link>

              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent mx-2"></div>

              {dockItems.map((item, index) => (
                <Link key={index} href={item.href} className="group relative flex flex-col items-center">
                  <div
                    className={`relative w-13 h-13 bg-gradient-to-br ${hoveredIndex === index ? item.hoverColor : item.color} rounded-xl flex items-center justify-center shadow-xl transform transition-all duration-300 hover:shadow-2xl`}
                    style={{
                      transform: `scale(${getIconScale(index)}) translateY(${hoveredIndex === index ? '-10px' : '0px'})`,
                      zIndex: hoveredIndex === index ? 20 : 10
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <item.icon className="w-6 h-6 text-white drop-shadow-sm" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>

                    {hoveredIndex === index && (
                      <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping"></div>
                    )}
                  </div>

                  {hoveredIndex === index && (
                    <div className="absolute -top-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg transform animate-in fade-in slide-in-from-bottom-2 duration-200 whitespace-nowrap">
                      <div className="relative">
                        {item.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-800 to-gray-900 rotate-45 -mt-1.5"></div>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingDock;
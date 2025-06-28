'use client';

import { ChefHat, Heart, Sparkles, Star, User, ArrowRight, Globe, Coffee, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-50 via-white to-orange-50 text-gray-800 relative overflow-hidden border-t border-gray-200">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 border border-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 border border-red-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-pink-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-32 right-1/3 w-14 h-14 border border-yellow-400 rounded-full animate-pulse"></div>
            </div>

            <div className="relative z-10">
                {/* Main footer content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Brand and Story Section */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-orange-600 mb-3 flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-red-500" />
                                        Our Story
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Born from a passion for preserving India's rich culinary heritage, Rasoi AI bridges the gap between traditional recipes and modern convenience. We believe that every dish tells a story, and every meal connects us to our roots.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-orange-600 mb-3 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-500" />
                                        Powered by Innovation
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Using Google's advanced Gemini AI, we understand your mood, preferences, and local flavors to craft personalized recipe recommendations. From street food to royal cuisine, we help you discover the perfect dish for every moment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Profile and Navigation Section */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                                    <User className="w-5 h-5 text-orange-500" />
                                    Your Culinary Journey
                                </h4>
                                <p className="text-gray-600 text-sm mb-6">
                                    Discover your cooking stats, saved recipes, and personalized recommendations in your profile.
                                </p>
                                <Button
                                    className="w-full cursor-pointer bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    onClick={() => window.location.href = '/profile'}
                                >
                                    <User className="w-4 h-4 mr-2" />
                                    View Profile
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                            </div>

                            

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <Code className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-semibold text-blue-700">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full font-medium">Clerk</span>
                                    <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full font-medium">Gemini AI</span>
                                    <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full font-medium">Next.js</span>
                                    <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full font-medium">Tailwind</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-xs text-gray-800">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>All systems operational</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute bottom-4 right-4 opacity-30">
                <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
                    <Sparkles className="w-2 h-2 text-orange-500 animate-ping" />
                    <Sparkles className="w-4 h-4 text-red-500 animate-bounce" />
                </div>
            </div>
        </footer>
    );
}
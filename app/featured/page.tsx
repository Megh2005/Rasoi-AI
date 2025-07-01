"use client";
import React, { useState, useEffect } from 'react';
import { ChefHat, MapPin, Heart, Clock, Users, Utensils, Sparkles, Zap } from 'lucide-react';
import { mockRecipes, RecipeNew } from '@/lib/gemini';
import { Button } from '@/components/ui/button';

type RecipeType = 'veg' | 'non-veg' | 'jain';
type RecipeMood = 'Royal' | 'Coastal' | 'Creamy' | 'Comfort' | 'Fresh';

interface IndianRecipesPageProps { }

const IndianRecipesPage: React.FC<IndianRecipesPageProps> = () => {
    const [selectedRecipe, setSelectedRecipe] = useState<RecipeNew | null>(null);
    const [featuredRecipes, setFeaturedRecipes] = useState<RecipeNew[]>([]);    

    useEffect(() => {
        const getRandomRecipes = (): RecipeNew[] => {
            const shuffled = [...mockRecipes].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 3);
        };

        setFeaturedRecipes(getRandomRecipes());
    }, []);

    const getTypeColor = (type: RecipeType): string => {
        switch (type) {
            case 'veg':
                return 'bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg shadow-emerald-500/40';
            case 'non-veg':
                return 'bg-gradient-to-r from-red-400 to-rose-500 shadow-lg shadow-red-500/40';
            case 'jain':
                return 'bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-orange-500/40';
            default:
                return 'bg-gradient-to-r from-gray-400 to-gray-500';
        }
    };

    const getMoodColor = (mood: RecipeMood): string => {
        const colors: Record<RecipeMood, string> = {
            'Royal': 'bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/40',
            'Coastal': 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40',
            'Creamy': 'bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/40',
            'Comfort': 'bg-gradient-to-r from-pink-400 to-rose-500 shadow-lg shadow-pink-500/40',
            'Fresh': 'bg-gradient-to-r from-teal-400 to-emerald-500 shadow-lg shadow-teal-500/40'
        };
        return colors[mood] || 'bg-gradient-to-r from-indigo-500 to-purple-600';
    };

    const handleRecipeClick = (recipe: RecipeNew): void => {
        setSelectedRecipe(recipe);
    };

    const handleCloseModal = (): void => {
        setSelectedRecipe(null);
    };

    const floatingParticleStyle = (delay: string): React.CSSProperties => ({
        animationDelay: delay
    });

    return (
        <div className="min-h-screen pb-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 relative overflow-hidden">
            {/* Light Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-200/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-200/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-pink-200/40 to-transparent rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-bounce opacity-60"></div>
                <div
                    className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-500 rounded-full animate-bounce opacity-60"
                    style={floatingParticleStyle('1s')}
                ></div>
                <div
                    className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce opacity-60"
                    style={floatingParticleStyle('2s')}
                ></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Sparkles className="text-cyan-600 animate-pulse" size={32} />
                        <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Featured Flavors of India
                        </h1>
                        <Zap className="text-purple-600 animate-pulse" size={32} />
                    </div>
                </div>

                {/* Featured Recipes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredRecipes.map((recipe: RecipeNew) => (
                        <div
                            key={recipe.id}
                            className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-200/50 hover:border-cyan-400/50 overflow-hidden"
                            onClick={() => handleRecipeClick(recipe)}
                        >
                            <div className="p-6 relative">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                                        {recipe.image}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-cyan-700 transition-colors duration-300">
                                        {recipe.name}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                                        {recipe.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 justify-center mb-6">
                                        <span className={`${getTypeColor(recipe.type)} text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transform hover:scale-105 transition-all duration-200`}>
                                            <Utensils size={14} />
                                            {recipe.type.toUpperCase()}
                                        </span>

                                        <span className={`${getMoodColor(recipe.mood)} text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transform hover:scale-105 transition-all duration-200`}>
                                            <Heart size={14} />
                                            {recipe.mood}
                                        </span>

                                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/40 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transform hover:scale-105 transition-all duration-200">
                                            <MapPin size={14} />
                                            {recipe.state}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm text-gray-600 mb-6">
                                        <span className="flex items-center gap-2 bg-gray-100/70 px-3 py-2 rounded-xl">
                                            <Clock size={16} className="text-cyan-600" />
                                            {recipe.cookTime}
                                        </span>
                                        <span className="flex items-center gap-2 bg-gray-100/70 px-3 py-2 rounded-xl">
                                            <Users size={16} className="text-purple-600" />
                                            Serves {recipe.serves}
                                        </span>
                                    </div>

                                    <Button
                                        className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer hover:shadow-cyan-500/40 transform hover:scale-105"
                                        type="button"
                                    >
                                        <ChefHat size={20} />
                                        Cook This Magic
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recipe Modal */}
                {selectedRecipe && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                                            {selectedRecipe.name}
                                        </h2>
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            <span className={`${getTypeColor(selectedRecipe.type)} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2`}>
                                                <Utensils size={16} />
                                                {selectedRecipe.type.toUpperCase()}
                                            </span>
                                            <span className={`${getMoodColor(selectedRecipe.mood)} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2`}>
                                                <Heart size={16} />
                                                {selectedRecipe.mood}
                                            </span>
                                            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/40 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                                <MapPin size={16} />
                                                {selectedRecipe.state}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleCloseModal}
                                        className="text-gray-500 hover:text-gray-800 text-3xl font-bold bg-gray-100 hover:bg-red-100 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
                                        type="button"
                                        aria-label="Close modal"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="text-8xl mb-8 text-center filter drop-shadow-2xl">{selectedRecipe.image}</div>

                                <div className="grid lg:grid-cols-2 gap-10">
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                            <span className="text-3xl" role="img" aria-label="ingredients">📝</span>
                                            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Ingredients</span>
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedRecipe.ingredients.map((ingredient: string, index: number) => (
                                                <li key={index} className="flex items-start gap-3 group">
                                                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                                                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{ingredient}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                            <span className="text-3xl" role="img" aria-label="chef">👨‍🍳</span>
                                            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Instructions</span>
                                        </h3>
                                        <ol className="space-y-5">
                                            {selectedRecipe.instructions.map((instruction: string, index: number) => (
                                                <li key={index} className="flex gap-4 group">
                                                    <span className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-white w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{instruction}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>

                                <div className="mt-10 p-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl border border-gray-200 backdrop-blur-sm">
                                    <div className="flex justify-between items-center text-gray-700">
                                        <span className="flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-3 rounded-xl border border-cyan-200">
                                            <Clock size={20} className="text-cyan-600" />
                                            <span className="font-semibold">Cook Time: {selectedRecipe.cookTime}</span>
                                        </span>
                                        <span className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 rounded-xl border border-purple-200">
                                            <Users size={20} className="text-purple-600" />
                                            <span className="font-semibold">Serves: {selectedRecipe.serves}</span>
                                        </span>
                                        <span className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-3 rounded-xl border border-orange-200">
                                            <ChefHat size={20} className="text-orange-600" />
                                            <span className="font-semibold">Difficulty: {selectedRecipe.difficulty}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IndianRecipesPage;
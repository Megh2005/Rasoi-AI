"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, MapPin, Thermometer, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { getCurrentSeason } from '@/lib/utils';
import { generateFoodMenu } from '@/lib/gemini';
import { cuisines, moods, preferences, states } from '@/lib/prompts';

interface Recipe {
    name: string;
    description: string;
    cookingTime: string;
    servings: string;
    difficulty: string;
    ingredients: string[];
    instructions: string[];
    tips: string[];
}

// Custom Toast Component for Promise-based toasts
interface ToastProps {
    toast: {
        show: boolean;
        message: string;
        type: 'loading' | 'success' | 'error';
    };
    onClose: () => void;
}

const Toast = ({ toast, onClose }: ToastProps) => {
    if (!toast.show) return null;

    const getIcon = () => {
        switch (toast.type) {
            case 'loading':
                return <Loader2 className="h-4 w-4 animate-spin text-blue-600" />;
            case 'success':
                return <CheckCircle className="h-4 w-4 text-emerald-600" />;
            case 'error':
                return <XCircle className="h-4 w-4 text-rose-600" />;
            default:
                return null;
        }
    };

    const getStyles = () => {
        switch (toast.type) {
            case 'loading':
                return 'bg-blue-50 border-blue-200 text-blue-800';
            case 'success':
                return 'bg-emerald-50 border-emerald-200 text-emerald-800';
            case 'error':
                return 'bg-rose-50 border-rose-200 text-rose-800';
            default:
                return 'bg-slate-50 border-slate-200 text-slate-800';
        }
    };

    return (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border transition-all duration-500 transform ${getStyles()} ${toast.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="flex items-center gap-3">
                {getIcon()}
                <span className="text-sm font-medium">{toast.message}</span>
                {toast.type !== 'loading' && (
                    <button
                        onClick={onClose}
                        className="ml-2 text-lg leading-none hover:opacity-70 transition-opacity"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
};

export default function Create() {
    const [cuisine, setCuisine] = useState('');
    const [state, setState] = useState('');
    const [mood, setMood] = useState('');
    const [preference, setPreference] = useState('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    // Simple toast function
    const showToast = (message: string, type: 'loading' | 'success' | 'error' = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: '', type: 'success' });
        }, 5000);
    };

    // Promise-based toast function
    const showPromiseToast = async (promise: Promise<any>, messages: { loading: string; success: string; error: string }) => {
        // Show loading toast
        setToast({ show: true, message: messages.loading, type: 'loading' });

        try {
            const result = await promise;
            // Show success toast
            setToast({ show: true, message: messages.success, type: 'success' });
            setTimeout(() => {
                setToast({ show: false, message: '', type: 'success' });
            }, 3000);
            return result;
        } catch (error) {
            // Show error toast
            setToast({ show: true, message: messages.error, type: 'error' });
            setTimeout(() => {
                setToast({ show: false, message: '', type: 'success' });
            }, 3000);
            throw error;
        }
    };


    const handleGenerateMenu = async () => {
        if (!cuisine || !state || !mood || !preference) {
            // Simple error toast for validation
            showToast('Please select all preferences to continue', 'error');
            return;
        }

        // Promise-based toast with loading, success, and error states
        const menuGenerationPromise = (async () => {
            setLoading(true);
            try {
                const currentSeason = getCurrentSeason();
                const generatedRecipes = await generateFoodMenu(cuisine, state, mood, currentSeason, preference);
                setRecipes(generatedRecipes);
                return generatedRecipes;
            } catch (error) {
                console.error('Error generating menu:', error);
                throw new Error('Failed to generate menu. Please try again.');
            } finally {
                setLoading(false);
            }
        })();

        // Show promise toast
        showPromiseToast(
            menuGenerationPromise,
            {
                loading: 'Generating your personalized menu...',
                success: 'Your delicious menu is ready! ✨',
                error: 'Failed to generate menu. Please try again.'
            }
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <Toast
                toast={toast as { show: boolean; message: string; type: 'loading' | 'success' | 'error' }}
                onClose={() => setToast({ show: false, message: '', type: 'success' })}
            />
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <ChefHat className="h-8 w-8 text-indigo-600" />
                        <h1 className="text-4xl font-bold text-slate-900">Rasoi AI</h1>
                    </div>
                    <p className="text-lg text-slate-600">Discover authentic Indian recipes tailored to your mood</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <Thermometer className="h-4 w-4 text-blue-500" />
                        <Badge variant="secondary" className="text-sm bg-slate-100 text-slate-700">
                            {getCurrentSeason()} Season
                        </Badge>
                    </div>
                </div>

                {/* Selection Form */}
                <Card className="max-w-6xl mx-auto mb-8 shadow-lg border-slate-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-indigo-500" />
                            Tell us your preferences
                        </CardTitle>
                        <CardDescription>
                            Select your cuisine preference, location, and current mood for personalized recommendations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">Cuisine</label>
                                <Select value={cuisine} onValueChange={setCuisine}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select cuisine" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {cuisines.map((c) => (
                                            <SelectItem key={c} value={c}>{c}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">State/City</label>
                                <Select value={state} onValueChange={setState}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {states.map((s) => (
                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">Mood</label>
                                <Select value={mood} onValueChange={setMood}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select mood" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {moods.map((m) => (
                                            <SelectItem key={m} value={m}>{m}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">Preferences</label>
                                <Select value={preference} onValueChange={setPreference}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Preference" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {preferences.map((p) => (
                                            <SelectItem key={p} value={p}>{p}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            onClick={handleGenerateMenu}
                            disabled={loading || !cuisine || !state || !mood || !preference}
                            className="w-full cursor-pointer relative overflow-hidden text-white font-semibold text-lg py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            style={{
                                background: `
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(240, 240, 245, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 20% 70%, rgba(250, 250, 255, 0.25) 0%, transparent 50%),
      linear-gradient(135deg, 
        rgba(99, 102, 241, 0.9) 0%, 
        rgba(139, 92, 246, 0.85) 25%, 
        rgba(168, 85, 247, 0.9) 50%, 
        rgba(147, 51, 234, 0.95) 75%, 
        rgba(126, 34, 206, 1) 100%
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.08) 2px,
        rgba(255, 255, 255, 0.08) 4px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 3px,
        rgba(255, 255, 255, 0.05) 3px,
        rgba(255, 255, 255, 0.05) 6px
      )
    `,
                                backgroundSize: '200px 200px, 300px 300px, 250px 250px, 100% 100%, 15px 15px, 20px 20px'
                            }}
                            size="lg"
                        >
                            {/* Marble texture overlay */}
                            <div
                                className="absolute inset-0 opacity-30 rounded-2xl"
                                style={{
                                    background: `
        radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 40%),
        radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.3) 0%, transparent 45%),
        radial-gradient(circle at 45% 10%, rgba(255, 255, 255, 0.2) 0%, transparent 35%),
        radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.25) 0%, transparent 40%)
      `
                                }}
                            />

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />

                            {/* Button text */}
                            <span className="relative z-10 drop-shadow-lg">
                                {loading ? 'Generating Menu...' : 'Generate My Menu ✨'}
                            </span>
                        </Button>
                    </CardContent>
                </Card>

                {/* Recipes Grid */}
                {recipes.length > 0 && (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Personalized Menu</h2>
                            <p className="text-slate-600">Perfect for {getCurrentSeason().toLowerCase()} • {cuisine} cuisine • {mood} • {preference}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recipes.map((recipe, index) => (
                                <Card
                                    key={index}
                                    className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border-2 border-slate-100"
                                    onClick={() => setSelectedRecipe(recipe)}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-lg text-indigo-700">{recipe.name}</CardTitle>
                                        <CardDescription>{recipe.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{recipe.cookingTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4" />
                                                <span>{recipe.servings}</span>
                                            </div>
                                        </div>
                                        <Badge
                                            variant={recipe.difficulty === 'Easy' ? 'default' : recipe.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                                            className="text-xs"
                                        >
                                            {recipe.difficulty}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Recipe Detail Modal */}
                {selectedRecipe && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <CardHeader className="sticky top-0 bg-white border-b">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl text-indigo-700">{selectedRecipe.name}</CardTitle>
                                    <Button variant="outline" size="sm" onClick={() => setSelectedRecipe(null)}>
                                        ✕
                                    </Button>
                                </div>
                                <CardDescription>{selectedRecipe.description}</CardDescription>
                                <div className="flex items-center gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{selectedRecipe.cookingTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4" />
                                        <span>{selectedRecipe.servings}</span>
                                    </div>
                                    <Badge variant="secondary">{selectedRecipe.difficulty}</Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Ingredients:</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {selectedRecipe.ingredients.map((ingredient, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                {ingredient}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Instructions:</h3>
                                    <ol className="space-y-3">
                                        {selectedRecipe.instructions.map((instruction, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-medium">
                                                    {i + 1}
                                                </span>
                                                <span className="text-sm text-slate-700">{instruction}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {selectedRecipe.tips.length > 0 && (
                                    <>
                                        <Separator />
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-3">Chef's Tips:</h3>
                                            <ul className="space-y-2">
                                                {selectedRecipe.tips.map((tip, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <span className="text-purple-500 mt-0.5">💡</span>
                                                        {tip}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}
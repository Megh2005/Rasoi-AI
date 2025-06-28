"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, MapPin, Thermometer } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { getCurrentSeason } from '@/lib/utils';
import { generateFoodMenu } from '@/lib/gemini';
import Navbar from '@/components/Navbar';

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

export default function Home() {
  const [cuisine, setCuisine] = useState('');
  const [state, setState] = useState('');
  const [mood, setMood] = useState('');
  const [preference, setPreference] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const cuisines = [
    'Andhra',
    'Awadhi',
    'Bengali',
    'Bihari',
    'Chettinad',
    'Goan',
    'Gujarati',
    'Haryanvi',
    'Himachali',
    'Hyderabadi',
    'Kashmiri',
    'Kerala',
    'Konkani',
    'Maharashtrian',
    'Malabari',
    'Manipuri',
    'Marwari',
    'Mughlai',
    'Nagpuri',
    'North Eastern',
    'North Indian',
    'Odia',
    'Parsi',
    'Punjabi',
    'Rajasthani',
    'Sindhi',
    'South Indian',
    'Tamil',
    'Telugu',
    'Udupi',
    'Uttarakhandi'
  ];


  const states = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  const moods = [
    'Angry',
    'Anxious',
    'Calm',
    'Confident',
    'Content',
    'Depressed',
    'Excited',
    'Happy',
    'Lonely',
    'Sad'
  ];
  
  const preferences = [
    'Veg',
    'Non Veg',
    'Jain'
  ]


  const handleGenerateMenu = async () => {
    if (!cuisine || !state || !mood || !preference) {
      toast.error('Please select cuisine, state, and mood');
      return;
    }

    setLoading(true);
    try {
      const currentSeason = getCurrentSeason();
      const generatedRecipes = await generateFoodMenu(cuisine, state, mood, currentSeason, preference);
      setRecipes(generatedRecipes);
      toast.success('Menu generated successfully!');
    } catch (error) {
      toast.error('Failed to generate menu. Please try again.');
      console.error('Error generating menu:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900">Rasoi AI</h1>
          </div>
          <p className="text-lg text-gray-600">Discover authentic Indian recipes tailored to your mood</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Thermometer className="h-4 w-4 text-blue-500" />
            <Badge variant="secondary" className="text-sm">
              {getCurrentSeason()} Season
            </Badge>
          </div>
        </div>

        {/* Selection Form */}
        <Card className="max-w-6xl mx-auto mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              Tell us your preferences
            </CardTitle>
            <CardDescription>
              Select your cuisine preference, location, and current mood for personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Cuisine</label>
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
                <label className="text-sm font-medium text-gray-700 mb-2 block">State/City</label>
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
                <label className="text-sm font-medium text-gray-700 mb-2 block">Mood</label>
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
                <label className="text-sm font-medium text-gray-700 mb-2 block">Preferences</label>
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
              className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700"
              size="lg"
            >
              {loading ? 'Generating Menu...' : 'Generate My Menu ✨'}
            </Button>
          </CardContent>
        </Card>

        {/* Recipes Grid */}
        {recipes.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Personalized Menu</h2>
              <p className="text-gray-600">Perfect for {getCurrentSeason().toLowerCase()} season • {cuisine} cuisine • {mood}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border-2 border-gray-100"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-700">{recipe.name}</CardTitle>
                    <CardDescription>{recipe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
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
                  <CardTitle className="text-xl text-orange-700">{selectedRecipe.name}</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setSelectedRecipe(null)}>
                    ✕
                  </Button>
                </div>
                <CardDescription>{selectedRecipe.description}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-gray-600">
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
                  <h3 className="font-semibold text-gray-900 mb-3">Ingredients:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedRecipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Instructions:</h3>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.map((instruction, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-sm font-medium">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {selectedRecipe.tips.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Chef's Tips:</h3>
                      <ul className="space-y-2">
                        {selectedRecipe.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-orange-500 mt-0.5">💡</span>
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
// lib/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FOOD_PROMPT } from './prompts';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export interface Recipe {
  name: string;
  description: string;
  cookingTime: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
}

export async function generateFoodMenu(
  cuisine: string,
  state: string,
  mood: string,
  preference: string,
  season: string
): Promise<Recipe[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = FOOD_PROMPT
      .replace('{CUISINE}', cuisine)
      .replace('{STATE}', state)
      .replace('{MOOD}', mood)
      .replace('{SEASON}', season)
      .replace('{PREFERENCE}', preference);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response
    const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const recipes = JSON.parse(cleanedText);

    // Validate the response structure
    if (!Array.isArray(recipes) || recipes.length === 0) {
      throw new Error('Invalid response format from AI');
    }

    return recipes.map((recipe: any) => ({
      name: recipe.name || 'Unnamed Dish',
      description: recipe.description || 'A delicious Indian dish',
      cookingTime: recipe.cookingTime || '30 mins',
      servings: recipe.servings || '4 people',
      difficulty: recipe.difficulty || 'Medium',
      ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
      instructions: Array.isArray(recipe.instructions) ? recipe.instructions : [],
      tips: Array.isArray(recipe.tips) ? recipe.tips : []
    }));

  } catch (error) {
    console.error('Error generating menu:', error);
    throw new Error('Failed to generate menu. Please try again.');
  }
}
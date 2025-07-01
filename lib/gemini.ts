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

export interface RecipeNew {
  id: number;
  name: string;
  state: string;
  type: 'veg' | 'non-veg' | 'jain';
  mood: 'Royal' | 'Coastal' | 'Creamy' | 'Comfort' | 'Fresh';
  image: string;
  cookTime: string;
  serves: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  ingredients: string[];
  instructions: string[];
}


export const mockRecipes: RecipeNew[] = [
  {
    id: 1,
    name: "Rajasthani Dal Baati Churma",
    state: "Rajasthan",
    type: "veg",
    mood: "Royal",
    image: "🥘",
    cookTime: "90 mins",
    serves: "4-6",
    difficulty: "Medium",
    description:
      "A traditional Rajasthani delicacy consisting of dal, baati, and churma - a perfect combination of flavors.",
    ingredients: [
      "2 cups whole wheat flour",
      "1 cup mixed dal (chana, moong, urad)",
      "1 cup jaggery",
      "4 tbsp ghee",
      "1 tsp cumin seeds",
      "2 green chilies",
      "1 inch ginger",
      "Salt to taste",
      "Red chili powder",
      "Turmeric powder",
    ],
    instructions: [
      "Prepare the dough for baati by mixing wheat flour, ghee, and salt. Make small balls and bake at 180°C for 45 minutes.",
      "Cook mixed dal with turmeric, salt, and water until soft. Temper with cumin seeds, chilies, and ginger.",
      "For churma, crush the baked baati and mix with jaggery and ghee.",
      "Serve hot dal with baati and churma on the side.",
      "Garnish with fresh coriander and enjoy this royal Rajasthani feast!",
    ],
  },
  {
    id: 2,
    name: "Kerala Fish Curry",
    state: "Kerala",
    type: "non-veg",
    mood: "Coastal",
    image: "🐟",
    cookTime: "45 mins",
    serves: "4",
    difficulty: "Easy",
    description:
      "A fragrant coconut-based fish curry that captures the essence of Kerala's coastal cuisine.",
    ingredients: [
      "500g fish fillets (kingfish/pomfret)",
      "1 cup coconut milk",
      "2 tbsp coconut oil",
      "1 large onion, sliced",
      "3-4 green chilies",
      "10-12 curry leaves",
      "1 tsp mustard seeds",
      "1 tsp turmeric powder",
      "2 tsp red chili powder",
      "1 tsp coriander powder",
      "Tamarind paste",
      "Salt to taste",
    ],
    instructions: [
      "Clean and cut fish into medium pieces. Marinate with turmeric and salt for 15 minutes.",
      "Heat coconut oil in a pan. Add mustard seeds, curry leaves, and green chilies.",
      "Add sliced onions and sauté until golden brown.",
      "Add spice powders and cook for 2 minutes. Add tamarind paste and coconut milk.",
      "Gently add fish pieces and simmer for 10-15 minutes until cooked through.",
      "Serve hot with steamed rice and enjoy the coastal flavors!",
    ],
  },
  {
    id: 3,
    name: "Punjabi Butter Chicken",
    state: "Punjab",
    type: "non-veg",
    mood: "Creamy",
    image: "🍗",
    cookTime: "75 mins",
    serves: "4",
    difficulty: "Medium",
    description:
      "A creamy, rich chicken curry that's beloved worldwide for its perfect balance of spices and tomatoes.",
    ingredients: [
      "500g chicken, cut into pieces",
      "1 cup heavy cream",
      "4 large tomatoes",
      "2 tbsp butter",
      "1 large onion",
      "4 garlic cloves",
      "1 inch ginger",
      "1 tsp garam masala",
      "1 tsp red chili powder",
      "1 tsp coriander powder",
      "Yogurt for marination",
      "Salt to taste",
      "Fresh coriander for garnish",
    ],
    instructions: [
      "Marinate chicken with yogurt, ginger-garlic paste, and spices for 30 minutes.",
      "Grill or pan-fry the marinated chicken until lightly charred. Set aside.",
      "Make a smooth puree of tomatoes and onions.",
      "Heat butter in a pan, add the puree and cook until oil separates.",
      "Add spices and cook for 5 minutes. Add grilled chicken and cream.",
      "Simmer for 15 minutes until thick. Garnish with coriander and serve with naan!",
    ],
  },
  {
    id: 4,
    name: "Bengali Aloo Posto",
    state: "West Bengal",
    type: "veg",
    mood: "Comfort",
    image: "🥔",
    cookTime: "30 mins",
    serves: "4",
    difficulty: "Easy",
    description:
      "A simple yet flavorful Bengali dish with potatoes cooked in poppy seed paste.",
    ingredients: [
      "4 medium potatoes, cubed",
      "3 tbsp poppy seeds (posto)",
      "2 green chilies",
      "1 tsp mustard seeds",
      "1 tsp nigella seeds (kalonji)",
      "3 tbsp mustard oil",
      "1 tsp turmeric powder",
      "Salt to taste",
      "1 tsp sugar",
    ],
    instructions: [
      "Soak poppy seeds in warm water for 15 minutes, then grind to a smooth paste.",
      "Heat mustard oil in a pan. Add mustard seeds and nigella seeds.",
      "Add cubed potatoes and fry until lightly golden.",
      "Add turmeric, salt, and green chilies. Mix well.",
      "Add poppy seed paste and a little water. Cover and cook for 15 minutes.",
      "Add sugar and cook for 2 more minutes. Serve hot with steamed rice!",
    ],
  },
  {
    id: 5,
    name: "Gujarati Dhokla",
    state: "Gujarat",
    type: "jain",
    mood: "Fresh",
    image: "🟡",
    cookTime: "40 mins",
    serves: "6",
    difficulty: "Medium",
    description:
      "A steamed, spongy Jain-friendly snack that's healthy and bursting with flavors.",
    ingredients: [
      "2 cups gram flour (besan)",
      "1 cup yogurt",
      "1 tsp ginger paste",
      "2 green chilies, finely chopped",
      "1 tsp mustard seeds",
      "1 tsp sesame seeds",
      "8-10 curry leaves",
      "3 tbsp oil",
      "1 tsp eno fruit salt",
      "1 tsp sugar",
      "Salt to taste",
      "Fresh coriander for garnish",
    ],
    instructions: [
      "Mix gram flour, yogurt, ginger paste, green chilies, and salt to make a smooth batter.",
      "Add 1 tbsp oil to the batter and mix well. Let it rest for 10 minutes.",
      "Add eno fruit salt and mix gently. Pour into a greased steaming tray.",
      "Steam for 15-20 minutes until a toothpick comes out clean.",
      "For tempering, heat oil and add mustard seeds, sesame seeds, and curry leaves.",
      "Pour tempering over steamed dhokla. Garnish with coriander and serve!",
    ],
  },
];

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
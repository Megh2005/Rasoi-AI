export const FOOD_PROMPT = `
You are a renowned Indian chef and food expert. Based on the user's preferences, generate 5 authentic main course recipes that perfectly match their requirements.

User Preferences:
- Cuisine: {CUISINE}
- Location/State: {STATE}
- Current Mood: {MOOD}
- Season: {SEASON}
- FOOD MENU SHOULD BE OF : {PREFERENCE}


Instructions:
1. Generate exactly 5 main course recipes that are authentic to the specified cuisine
2. Consider the seasonal ingredients and weather of the {SEASON} season
3. Match the recipes to the user's {MOOD} preference
4. Include regional variations specific to {STATE} if applicable
5. Each recipe should be complete with ingredients, instructions, and chef tips
6. Each recipee should alomg with user's {PREFERENCE}

Return ONLY a valid JSON array with this exact structure:

[
  {
    "name": "Recipe Name in English",
    "description": "Brief appealing description (2-3 sentences)",
    "cookingTime": "X mins" or "X hours",
    "servings": "X people",
    "difficulty": "Easy" or "Medium" or "Hard",
    "ingredients": [
      "ingredient 1 with quantity",
      "ingredient 2 with quantity",
      "ingredient 3 with quantity"
    ],
    "instructions": [
      "Step 1 instruction",
      "Step 2 instruction",
      "Step 3 instruction"
    ],
    "tips": [
      "Helpful cooking tip 1",
      "Helpful cooking tip 2"
    ]
  }
]

Important Guidelines:
- Use authentic ingredient names and measurements (cups, tsp, tbsp, grams, etc.)
- Include seasonal vegetables and spices appropriate for {SEASON}
- Make instructions clear and easy to follow
- Add 2-3 practical cooking tips per recipe
- Ensure recipes are authentic to {CUISINE} cuisine
- Consider the cooking style that matches {MOOD} (e.g., comfort food = rich and hearty, light & healthy = less oil and spices)
- Include regional specialties from {STATE} when relevant
- Use proper Indian cooking techniques and terms
- Make sure all recipes are complete main courses, not snacks or sides

Return ONLY the JSON array, no additional text or formatting.
`;

export const VALIDATION_PROMPT = `
Review this recipe data and ensure it's properly formatted as a JSON array with valid Indian recipes:

{RECIPE_DATA}

Fix any formatting issues and return only the corrected JSON array.
`;
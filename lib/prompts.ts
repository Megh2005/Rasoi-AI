export const FOOD_PROMPT = `
You are a renowned Indian chef and food expert. Based on the user's preferences, generate 5 authentic main course recipes that perfectly match their requirements.

User Preferences:
- Cuisine: {CUISINE}
- Location/State: {STATE}
- Current Mood: {MOOD}
- Season: {SEASON}
- FOOD MENU SHOULD BE OF : {PREFERENCE}
- Do not deviate the {PREFERENCE}, must be stick to the {PREFERENCE} only.
- Do not add any additional {PREFERENCE} in the recipes.


Instructions:
1. Generate exactly 3 main course recipes that are authentic to the specified cuisine
2. Consider the seasonal ingredients and weather of the {SEASON} season
3. Match the recipes to the user's {MOOD} preference
4. The ingedients must be easily available in the {STATE}
5. Each recipe should be complete with ingredients, instructions, and chef tips
6. Each recipee should alomg with user's {PREFERENCE}
7. Each recipe should be of {PREFERENCE} only.
8. Take care of the {MOOD} of the user, make the recipes {MOOD} too.

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
- Add 5-6 practical cooking tips per recipe
- Ensure recipes are authentic to {CUISINE} cuisine
- Consider the cooking style that matches {MOOD} (e.g., comfort food = rich and hearty, light & healthy = less oil and spices)
- Include the ingridients which are only available in the given {STATE} when relevant
- Use proper Indian cooking techniques and terms
- Make sure all recipes are complete main courses, not snacks or sides

Return ONLY the JSON array, no additional text or formatting.
`;

export const VALIDATION_PROMPT = `
Review this recipe data and ensure it's properly formatted as a JSON array with valid Indian recipes:

{RECIPE_DATA}

Fix any formatting issues and return only the corrected JSON array.
`;

export const preferences = ["Veg", "Non Veg", "Jain"];
export const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const moods = [
  "Cheesy & Gooey",
  "Chilled & Refreshing",
  "Comfort Food",
  "Crispy & Crunchy",
  "Elegant & Gourmet",
  "Exotic Flavors",
  "Festive & Rich",
  "Fusion",
  "Hearty & Filling",
  "Home-Style Cooking",
  "Indulgent & Decadent",
  "Light & Healthy",
  "Minimal & Clean",
  "Nutritious & Wholesome",
  "Party Vibes",
  "Quick & Easy",
  "Romantic Dinner",
  "Spicy & Bold",
  "Street Food Style",
  "Sweet Cravings",
  "Traditional",
  "Umami Bomb",
  "Warm & Cozy",
  "Zesty & Tangy",
];

export const cuisines = [
  "Andhra",
  "Awadhi",
  "Bengali",
  "Bihari",
  "Chettinad",
  "Goan",
  "Gujarati",
  "Haryanvi",
  "Himachali",
  "Hyderabadi",
  "Kashmiri",
  "Kerala",
  "Konkani",
  "Maharashtrian",
  "Malabari",
  "Manipuri",
  "Marwari",
  "Mughlai",
  "Nagpuri",
  "North Eastern",
  "North Indian",
  "Odia",
  "Parsi",
  "Punjabi",
  "Rajasthani",
  "Sindhi",
  "South Indian",
  "Tamil",
  "Telugu",
  "Udupi",
  "Uttarakhandi",
];
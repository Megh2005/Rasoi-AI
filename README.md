# Rasoi AI - Your Personal Indian Recipe Assistant 🍛

A beautiful Next.js application that generates personalized Indian recipes based on your cuisine preference, location, mood, and current season using Google's Gemini AI.

## Features ✨

- **Smart Recipe Generation**: AI-powered recipe suggestions based on multiple factors
- **Seasonal Awareness**: Automatically detects current season for appropriate recipes
- **Regional Customization**: Recipes tailored to different Indian states and regions
- **Mood-Based Suggestions**: Recipes that match your current craving or mood
- **Beautiful UI**: Modern, responsive design with Shadcn UI components
- **Detailed Recipes**: Complete with ingredients, step-by-step instructions, and chef tips
- **Interactive Cards**: Click on any recipe to view full details

## Tech Stack 🛠️

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern UI components
- **Google Gemini AI** - AI-powered recipe generation
- **React Hot Toast** - Beautiful notifications
- **Lucide React** - Modern icons

## Setup Instructions 🚀

### 1. Prerequisites
- Node.js 18+ installed
- A Google account for Gemini API access

### 2. Get Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API key" in the sidebar
4. Create a new API key
5. Copy the generated API key

### 3. Installation

```bash
# Clone the repository or create a new Next.js project
npx create-next-app@latest rasoi-ai --typescript --tailwind --eslint --app

# Navigate to project directory
cd rasoi-ai

# Install dependencies
npm install @google/generative-ai react-hot-toast lucide-react clsx tailwind-merge @radix-ui/react-select @radix-ui/react-separator class-variance-authority tailwindcss-animate
```

### 4. Initialize Shadcn UI

```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add required components
npx shadcn-ui@latest add card button select badge separator
```

### 5. Environment Setup

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

### 6. File Structure

Create the following files in your project:

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── lib/
    ├── gemini.ts
    ├── prompts.ts
    └── utils.ts
```

### 7. Copy the Code

Copy all the provided code files into their respective locations:

- Replace `app/page.tsx` with the main component code
- Create `lib/gemini.ts` for AI integration
- Create `lib/prompts.ts` for AI prompts
- Create `lib/utils.ts` for utility functions
- Update `app/layout.tsx` with toast provider
- Update `app/globals.css` with custom styles

### 8. Run the Application

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your application!

## Usage Guide 📱

### 1. Select Preferences
- **Cuisine**: Choose from 10 popular Indian cuisines (Bengali, Punjabi, South Indian, etc.)
- **State/City**: Select your location for regional recipe variations
- **Mood**: Pick what you're craving (Comfort Food, Spicy & Bold, Light & Healthy, etc.)

### 2. Generate Menu
- Click "Generate My Menu ✨" to get 5 personalized main course recipes
- The app automatically considers the current season for ingredient suggestions

### 3. View Recipe Details
- Click on any recipe card to view complete details
- See ingredients list, step-by-step instructions, and chef tips
- Each recipe includes cooking time, servings, and difficulty level

## Features Breakdown 🔍

### Seasonal Intelligence
The app automatically detects the current season and suggests appropriate recipes:
- **Winter**: Warming, hearty dishes
- **Spring**: Fresh, light recipes
- **Monsoon**: Comforting rainy-day meals
- **Autumn**: Crisp weather specialties
- **Summer**: Cooling, refreshing dishes

### Mood Matching
Different moods trigger different recipe styles:
- **Comfort Food**: Rich, indulgent dishes
- **Spicy & Bold**: High-spice, flavorful recipes
- **Light & Healthy**: Lower oil, nutritious options
- **Festive & Rich**: Special occasion dishes
- **Quick & Easy**: 30-minute meals
- **Traditional**: Authentic, time-tested recipes
- **Fusion**: Modern twists on classics
- **Street Food Style**: Popular street food recipes

### Regional Variations
Recipes are customized based on your selected state:
- Uses locally popular ingredients
- Incorporates regional cooking techniques
- Suggests state-specific variations of dishes

## Customization Options 🎨

### Adding More Cuisines
Edit the `cuisines` array in `page.tsx`:

```typescript
const cuisines = [
  'Bengali', 'Punjabi', 'South Indian', 'Gujarati', 
  'Maharashtrian', 'Rajasthani', 'North Indian', 
  'Hyderabadi', 'Kashmiri', 'Goan',
  // Add your custom cuisines here
];
```

### Adding More States
Update the `states` array:

```typescript
const states = [
  'West Bengal', 'Delhi', 'Mumbai', 'Karnataka',
  // Add more states/cities
];
```

### Modifying AI Prompts
Edit `lib/prompts.ts` to customize how recipes are generated:

```typescript
export const FOOD_PROMPT = `
Your custom prompt here...
Use placeholders: {CUISINE}, {STATE}, {MOOD}, {SEASON}
`;
```

## Troubleshooting 🔧

### Common Issues

1. **API Key Error**
   - Ensure your Gemini API key is correctly set in `.env.local`
   - Check that the file name is exactly `.env.local`
   - Restart your development server after adding the key

2. **Component Not Found**
   - Make sure all Shadcn components are installed
   - Run `npx shadcn-ui@latest add [component-name]` for missing components

3. **Build Errors**
   - Ensure all dependencies are installed
   - Check that TypeScript types are correctly imported

4. **Styling Issues**
   - Verify Tailwind CSS is properly configured
   - Check that `globals.css` includes all necessary styles

### API Limits
- Gemini API has rate limits for free tier
- Consider implementing request caching for production use
- Add error handling for rate limit scenarios

## Deployment 🚀

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `NEXT_PUBLIC_GEMINI_API_KEY` in Vercel environment variables
4. Deploy!

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing 🤝

Feel free to contribute by:
- Adding more regional cuisines
- Improving AI prompts for better recipes
- Enhancing UI/UX design
- Adding recipe ratings and favorites
- Implementing user accounts and saved recipes



## License 📄

This project is open source and available under the [MIT License](LICENSE).


## Support 💬

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Check [Shadcn/UI documentation](https://ui.shadcn.com/)
4. Visit [Google AI Studio docs](https://ai.google.dev/docs)

---

**Happy Cooking! 👨‍🍳👩‍🍳**

Enjoy discovering new flavors and creating delicious Indian meals with Rasoi AI!

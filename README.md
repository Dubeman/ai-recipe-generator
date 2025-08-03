# AI Recipe Generator 🍳

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **AI-powered recipe generator that creates personalized, delicious recipes based on your preferences and available ingredients**

## 🚀 Overview

Transform your cooking experience with AI! This intelligent recipe generator leverages advanced natural language processing to create custom recipes tailored to your dietary preferences, available ingredients, and culinary skills.

### ✨ Key Features
- 🤖 **AI-Powered Generation**: Uses OpenAI's GPT models for creative recipe creation
- 🎯 **Personalization**: Custom recipes based on dietary preferences and restrictions
- 🥬 **Ingredient-Based**: Generate recipes from what you have in your kitchen
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- ⚡ **Real-time Generation**: Fast recipe creation with streaming responses
- 🍽️ **Multiple Cuisines**: Support for various international cooking styles

## 🎯 Live Demo

🌐 **[Try it live!](https://ai-recipe-generator-demo.vercel.app)** *(Replace with actual deployment URL)*

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern component library
- **Lucide Icons**: Beautiful icon library

### AI & Backend
- **OpenAI API**: GPT-4 for recipe generation
- **Vercel AI SDK**: Streamlined AI integration
- **Edge Runtime**: Fast, global execution

### Deployment
- **Vercel**: Seamless deployment and hosting
- **Vercel Analytics**: Performance monitoring

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ and npm/yarn/pnpm
OpenAI API key
```

### Installation
```bash
# Clone the repository
git clone https://github.com/Dubeman/ai-recipe-generator.git
cd ai-recipe-generator

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup
```bash
# Create .env.local file
cp .env.example .env.local

# Add your OpenAI API key
OPENAI_API_KEY=your_openai_api_key_here
```

### Development
```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💡 How It Works

### 1. Input Collection
```typescript
interface RecipeRequest {
  ingredients: string[];
  dietaryRestrictions: string[];
  cuisine: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  cookingTime: number;
}
```

### 2. AI Processing
- **Prompt Engineering**: Carefully crafted prompts for optimal recipe generation
- **Context Awareness**: Considers dietary restrictions and preferences
- **Structured Output**: Formatted recipes with ingredients, instructions, and tips

### 3. Recipe Generation
```typescript
// Example API call
const recipe = await generateRecipe({
  ingredients: ['chicken', 'broccoli', 'rice'],
  dietaryRestrictions: ['gluten-free'],
  cuisine: 'Asian',
  difficulty: 'medium',
  servings: 4,
  cookingTime: 30
});
```

## 🎨 Features in Detail

### 🤖 Smart Recipe Generation
- **Ingredient Optimization**: Makes the most of available ingredients
- **Nutritional Balance**: Considers healthy cooking principles
- **Cooking Techniques**: Includes proper cooking methods and tips
- **Portion Control**: Accurate serving sizes and scaling

### 🍽️ Personalization Options
- **Dietary Restrictions**: Vegetarian, vegan, gluten-free, keto, etc.
- **Cuisine Preferences**: Italian, Asian, Mexican, Mediterranean, and more
- **Skill Level**: Beginner-friendly to advanced cooking techniques
- **Time Constraints**: Quick meals to elaborate dinner preparations

### 📱 User Experience
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Intuitive Interface**: Clean, easy-to-use design
- **Recipe Sharing**: Export and share generated recipes
- **History**: Save and revisit your favorite generated recipes

## 📁 Project Structure

```
ai-recipe-generator/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── generate/      # Recipe generation endpoint
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── recipe/       # Recipe-specific components
│   ├── lib/              # Utility functions
│   └── page.tsx          # Main page
├── public/               # Static assets
├── styles/              # Global styles
├── types/               # TypeScript type definitions
├── .env.example         # Environment variables template
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🔧 API Reference

### Generate Recipe Endpoint

```typescript
POST /api/generate

// Request body
{
  "ingredients": ["chicken", "vegetables"],
  "dietaryRestrictions": ["gluten-free"],
  "cuisine": "Italian",
  "difficulty": "medium",
  "servings": 4,
  "cookingTime": 45
}

// Response
{
  "recipe": {
    "title": "Italian Herb-Crusted Chicken with Roasted Vegetables",
    "ingredients": [...],
    "instructions": [...],
    "prepTime": "15 minutes",
    "cookTime": "30 minutes",
    "nutrition": {...}
  }
}
```

## 🎯 Upcoming Features

- [ ] **Recipe Rating System**: User feedback on generated recipes
- [ ] **Shopping List Generator**: Automatic grocery list creation
- [ ] **Nutritional Analysis**: Detailed nutritional information
- [ ] **Recipe Variations**: Multiple versions of the same dish
- [ ] **Video Integration**: AI-generated cooking videos
- [ ] **Meal Planning**: Weekly meal plan generation

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing powerful language models
- **Vercel** for excellent hosting and deployment tools
- **Next.js team** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework

## 📧 Contact

**Manas Dubey**
- GitHub: [@Dubeman](https://github.com/Dubeman)
- LinkedIn: [Manas Dubey](https://www.linkedin.com/in/manas-dubey-aba466234/)

---

⭐ **Star this repository if you love cooking with AI!** 

*Made with ❤️ and artificial intelligence*
import { Recipe } from "../types/Recipe";

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const SPOONACULAR_API_URL = "https://api.spoonacular.com/recipes/findByIngredients";

export async function fetchRecipesByIngredients(ingredients: string[]): Promise<Recipe[]> {
  const response = await fetch(`${SPOONACULAR_API_URL}?ingredients=${ingredients.join(",+")}&number=10&apiKey=${SPOONACULAR_API_KEY}`);
  const data = await response.json();
  return data.map((recipe: Recipe) => ({ id: recipe.id, title: recipe.title, image: recipe.image }));
}
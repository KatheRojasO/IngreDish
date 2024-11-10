import { RecipeCard } from "./RecipeCard";
import { RecipesProps } from "../types/Recipe";

export function Recipes({ recipesInfo }: RecipesProps) {
  const recipes = recipesInfo.map((recipe) => {
    return <RecipeCard key={recipe.id} recipeInfo={recipe} />;
  });

  return (
    <div className="recipes_container">
      <h1>Recipes</h1>
      {recipes}
    </div>
  );
}

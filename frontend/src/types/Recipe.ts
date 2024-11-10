export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface SearchBarProps {
  recipesInfo: Recipe[];
  setFilteredRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

export interface RecipesProps {
  recipesInfo: Recipe[];
}

export interface RecipeCardProps {
  recipeInfo: Recipe;
}

export interface UserDataInterface {
  userId: string|undefined;
  userName: string|null|undefined;
}
import { SignedIn, useUser } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useEffect, useState } from "react";
import { Recipe } from "../types/Recipe";
import { addUser } from "../helper/UserFavoritesHelper";
import { User } from "../types/User";
import { fetchRecipesByIngredients } from "../helper/SpoonacularApiHelper";


export function RecipePage() {

  const [recipesInfo, setRecipesInfo] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipesInfo);

  useEffect(() => {
    fetchRecipesByIngredients(["strawberry", "banana", "chocolate"]).then((recipes) => {
      setRecipesInfo(recipes);
      setFilteredRecipes(recipes);
    });
  }, []);

  const { user } = useUser();
  if (user?.id && user?.fullName) {
    const userData: User = { userId: user.id, userName: user.fullName };
    addUser(userData);
  }

  return (
    <SignedIn>
      <Header />
      <SearchBar recipesInfo={recipesInfo} setFilteredRecipes={setFilteredRecipes}/>
      <Recipes recipesInfo={filteredRecipes} isFavoritePage={false}/>
    </SignedIn>
  );
}

import { SignedIn, useUser } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import recipes from "../data/recipesById.json";
import { useState } from "react";
import { Recipe } from "../types/Recipe";
import { addUser } from "../helper/UserFavoritesHelper";
import { User } from "../types/User";


export function RecipePage() {
  const recipesInfo = recipes.map(({ id, title, image }) => ({ id, title, image }));
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipesInfo);

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

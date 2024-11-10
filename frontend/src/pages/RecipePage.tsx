import { SignedIn } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import recipes from "../data/recipesById.json";
import { useState } from "react";
import { Recipe } from "../types/Recipe";


export function RecipePage() {
  const recipesInfo = recipes.map(({ id, title, image }) => ({ id, title, image }));
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipesInfo);

  return (
    <SignedIn>
      <Header />
      <SearchBar recipesInfo={recipesInfo} setFilteredRecipes={setFilteredRecipes}/>
      <Recipes recipesInfo={filteredRecipes}/>
    </SignedIn>
  );
}

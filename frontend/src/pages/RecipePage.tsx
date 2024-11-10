import { SignedIn, useUser } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import recipes from "../data/recipesById.json";
import { useState } from "react";
import { Recipe, UserDataInterface } from "../types/Recipe";


export function RecipePage() {
  const recipesInfo = recipes.map(({ id, title, image }) => ({ id, title, image }));
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipesInfo);

  const { user } = useUser();
  const userData: UserDataInterface = { userId: user?.id, userName: user?.fullName };

  async function addUser () {
    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }

  if (user) {
    addUser();
  }

  return (
    <SignedIn>
      <Header />
      <SearchBar recipesInfo={recipesInfo} setFilteredRecipes={setFilteredRecipes}/>
      <Recipes recipesInfo={filteredRecipes}/>
    </SignedIn>
  );
}

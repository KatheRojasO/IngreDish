import { SignedIn } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

export function RecipePage() {
  return (
    <SignedIn>
      <Header />
      <SearchBar />
      <Recipes />
    </SignedIn>
  );
}

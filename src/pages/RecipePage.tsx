import { SignedIn } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import { Header } from "../components/Header";

export function RecipePage() {
  return (
    <SignedIn>
      <Header />
      <Recipes />
    </SignedIn>
  );
}

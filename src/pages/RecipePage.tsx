import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Recipes } from "../components/Recipes";
import logo from "../assets/logo.png";

export function RecipePage() {
  return (
    <SignedIn>
      <header className="recipe_page_header">
        <img src={logo} alt="logo" className="logo" />
        <UserButton />
      </header>
      <Recipes />
    </SignedIn>
  );
}

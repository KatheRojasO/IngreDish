import { RecipePage } from "./pages/RecipePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeInstructionsPage from "./pages/RecipeInstructionsPage";
import MainPage from "./pages/MainPage";
import { SignedOut } from "@clerk/clerk-react";
import WelcomePageHeader from "./components/WelcomePageHeader";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SignedOut>
          <WelcomePageHeader />
          <MainPage />
        </SignedOut>

        <Routes>
          <Route path="/" element={<RecipePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route
            path="/recipeDescription"
            element={<RecipeInstructionsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

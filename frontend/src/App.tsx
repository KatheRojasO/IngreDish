import { RecipePage } from "./pages/RecipePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeInstructionsPage from "./pages/RecipeInstructionsPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainPage />
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

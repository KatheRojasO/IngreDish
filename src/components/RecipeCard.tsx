import { useState } from "react";
import { RecipeCardProps } from "../types/Recipe";
import HeartFilledIcon from "../assets/images/HeartFilledIcon";
import HeartOutlineIcon from "../assets/images/HeartOutlineIcon";

export function RecipeCard({recipeInfo}: RecipeCardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h3>{recipeInfo.title}</h3>
        <img src={recipeInfo.image} alt={recipeInfo.title} className="recipe-image" />
        <button onClick={toggleLike} className="like-button">
          {liked ? <HeartFilledIcon /> : <HeartOutlineIcon />}
        </button>
      </div>
    </div>
  );
}

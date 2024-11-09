import { useState } from "react";
import recipes from "../data/recipesById.json";
import HeartFilledIcon from "../assets/images/HeartFilledIcon";
import HeartOutlineIcon from "../assets/images/HeartOutlineIcon";

export function RecipeCard() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const recipe = recipes.map((recipe) => (
    <div key={recipe.id} className="card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <button onClick={toggleLike} className="like-button">
        {liked ? (
          <HeartFilledIcon />
        ) : (
          <HeartOutlineIcon/>
        )}
      </button>
    </div>
  ));

  return <div className="card-container">{recipe}</div>;
}

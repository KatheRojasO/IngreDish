import recipes from "../data/recipesById.json";

export function RecipeCard() {
  const recipe = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  ));

  return <div className="card-container">{recipe}</div>;
}

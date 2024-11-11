import { Header } from "../components/Header";
import data from "../data/recipeInstructions.json";

export default function RecipeInstructionsPage() {
  const image = data.image;
  const steps = data.analyzedInstructions.flatMap((instruction) =>
    instruction.steps.map((step) => step.step)
  );

  return (
    <div className="recipe-instructions-container">
      <Header />
      <div className="blabla">
        <div className="instructions-card">
          <h3>{data.title}</h3>
          <img src={image} alt={data.title} className="instructions-image" />
          <p>{steps}</p>
        </div>
      </div>
    </div>
  );
}

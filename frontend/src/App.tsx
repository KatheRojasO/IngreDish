import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { RecipePage } from "./pages/RecipePage";

export default function App() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <RecipePage />
    </>
  );
}

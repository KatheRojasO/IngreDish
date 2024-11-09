import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        <UserButton />
      </div>
    </header>
  );
}

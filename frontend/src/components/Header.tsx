import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <Link to="/favorites">
            <button>My favorites</button>
          </Link>
          <UserButton />
        </div>
      </div>
    </header>
  );
}

import { useState } from "react";
import { SearchBarProps } from "../types/Recipe";

export function SearchBar({ recipesInfo, setFilteredRecipes }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchInput(input);

    if (input.length > 0) {
      const filtered = recipesInfo.filter((recipe) =>
        recipe.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipesInfo);
    }
  };


  return (
    <div className="searchbar-container">
      <form>
        <input
          placeholder="Type ingredients..."
          type="text"
          className="search-bar"
          onChange={handleChange}
          value={searchInput}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

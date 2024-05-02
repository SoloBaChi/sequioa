import React from "react";
import SearchIcon from "../components/icons/SearchIcon";

function Search(props) {
  return (
    <form>
      <div className="form-field">
        <input type="search" placeholder="Search..." />
        <div className="btn-container">
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;

import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-2 items-center justify-center space-x-4 mx-2 py-2 h-[60px]">
      <div className="w-[800px] flex items-center justify-center border rounded-full px-2 bg-white">
        <select className="outline-none px-4 py-2">
          <option>Categorie</option>
        </select>

        <input
          type="text"
          className="outline-none flex-1 px-2 py-2"
          placeholder="Nom..."
        />
        <button className="border border-orange-400 bg-orange-400 text-white rounded-full px-2 py-2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
              fill="none"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

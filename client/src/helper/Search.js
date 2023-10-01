import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  //console.log(setSearchQuery);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for properties..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;

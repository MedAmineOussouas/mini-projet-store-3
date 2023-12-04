import React, { useState } from "react";

function Search({ data, onFilter }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterData = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    onFilter(filteredData);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          className="searchTerm"
          type="text"
          placeholder="What are you looking for ?"
          value={search}
          onChange={handleChange}
        />
        <button onClick={filterData} className="searchButton">
          search
        </button>
      </div>
    </div>
  );
}

export default Search;

import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import ListItems from "./ListItems";

function Store() {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const response = axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  const handleFilter = (response) => {
    setFilteredData(response);
  };

  const itemsToRender = filteredData.length === 0 ? products : filteredData;

  return (
    <>
      <Search data={products} onFilter={handleFilter} />
      <ul>
        <ListItems items={itemsToRender} />
      </ul>
    </>
  );
}

export default Store;

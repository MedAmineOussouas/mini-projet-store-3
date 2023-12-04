import React from "react";
import Item from "./Item";
import AddItemToCart from "./AddItemToCart";

function ListItems({ items }) {
  return (
    <>
      <ul className="products-list">
        {items.map((item) => (
          <>
            <li key={item.id} className="products-item-container">
              <Item
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                desc={item.description}
              />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListItems;

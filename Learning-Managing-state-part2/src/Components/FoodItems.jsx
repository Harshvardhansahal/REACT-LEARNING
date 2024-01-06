import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ item }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (event, item) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(event, item)} // Anonymous Functions
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;

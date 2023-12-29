import Items from "./Items";

const FoodItems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Items key={item} foodItem={item}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;

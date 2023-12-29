import Items from "./Items";

const FoodItems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Items
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;

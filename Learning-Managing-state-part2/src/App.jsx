import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import "./App.css";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  // let foodItems = [];
  // const [textToShow, setTextToShow] = useState("Food Entered by User");
  let [foodItems, setFoodItems] = useState([]);
  const onKeydown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeydown}></FoodInput>
        <ErrorMessage item={foodItems}></ErrorMessage>
        <FoodItems item={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import "./App.css";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  // let foodItems = [];
  const [textToShow, setTextToShow] = useState("Food Entered by User");
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage item={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems item={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa
          corporis dolorem sunt soluta sequi at temporibus reiciendis quae optio
          itaque asperiores, suscipit neque, a quos minus dolor eveniet iure?
        </p>
      </Container>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;

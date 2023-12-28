import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import "./App.css";
function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  // let foodItems = [];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage item={foodItems}></ErrorMessage>
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

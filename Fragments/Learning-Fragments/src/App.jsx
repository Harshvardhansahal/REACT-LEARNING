import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  let foodItems = [];
  if (foodItems.length === 0) {
    return <h3>I am Still hungry</h3>;
  }
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

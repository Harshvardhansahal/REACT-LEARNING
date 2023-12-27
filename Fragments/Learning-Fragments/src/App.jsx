import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am Still hungry</h3>}
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

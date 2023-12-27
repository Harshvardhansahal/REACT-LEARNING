const ErrorMessage = () => {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", , "Milk"];
  return <>{foodItems.length === 0 && <h3>I am Still hungry</h3>}</>;
};
export default ErrorMessage;

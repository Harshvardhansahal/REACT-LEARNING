import styles from "./FoodInput.module.css";

const FoodInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter FoodItem here "
      className={styles.foodInput}
      // onChange={(event) => console.log(event.target.value)}
      onChange={props.handleOnChange}
    />
  );
};
export default FoodInput;

import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter FoodItem here "
      className={styles.foodInput}
      // onChange={(event) => console.log(event.target.value)}
      // onChange={props.handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  );
};
export default FoodInput;

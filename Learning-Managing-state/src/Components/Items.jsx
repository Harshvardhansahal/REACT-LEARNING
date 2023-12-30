import styles from "./Items.module.css";

const Items = ({ foodItem, handleBuyButton }) => {
  // let {foodItem} = props
  // const handleBuyButtonClicked = (foodItem) => {
  //   console.log(`${foodItem} being bought`);
  // };
  // const handleBuyButtonClicked = () => {
  //   console.log(`${foodItem} being bought`);
  // };

  return (
    <li className="list-group-item">
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log("buy button clicked")}
        // onClick={() => console.log(`${foodItem} being bought`)}
        // onClick={() => handleBuyButtonClicked(foodItem)}
        // onClick={handleBuyButtonClicked}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;

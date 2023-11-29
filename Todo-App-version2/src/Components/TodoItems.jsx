import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem ItemName={item.name} ItemDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;

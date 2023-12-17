function TodoItem1() {
  let ItemName = "Buy Milk";
  let ItemDate = "4/10/2023";
  return (
    <div className="container">
      <div class="row hv-row">
        <div class="col-6">{ItemName}</div>
        <div class="col-4">{ItemDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger hv-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;

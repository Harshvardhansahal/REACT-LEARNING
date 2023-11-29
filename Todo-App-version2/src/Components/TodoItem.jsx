function TodoItem({ ItemName, ItemDate }) {
  return (
    <div className="container">
      <div className="row hv-row">
        <div className="col-6">{ItemName}</div>
        <div className="col-4">{ItemDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger hv-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

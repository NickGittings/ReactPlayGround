import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "Chicago", "Louisville", "Indianpolis"];
  items = [];

  const emptyMessage = items.length === 0 && <p>No items found</p>;

  return (
    <Fragment>
      <h1>List</h1>
      {emptyMessage}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

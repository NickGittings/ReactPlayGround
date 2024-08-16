import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "Chicago", "Louisville", "Indianpolis"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const emptyMessage = items.length === 0 && <p>No items found</p>;

  return (
    <Fragment>
      <h1>List</h1>
      {emptyMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

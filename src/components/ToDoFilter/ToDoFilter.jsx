import { useState } from "react";

const ToDoFilter = () => {
  const [filter, setFilter] = useState("all");

  return (
    <ul className="filters">
      <li>
        <button>All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  );
};

export default ToDoFilter;

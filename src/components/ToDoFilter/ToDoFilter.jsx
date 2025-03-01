const ToDoFilter = ({ setStatusTask }) => {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => setStatusTask("All")}>All</button>
      </li>
      <li>
        <button onClick={() => setStatusTask("Active")}>Active</button>
      </li>
      <li>
        <button onClick={() => setStatusTask("Completed")}>Completed</button>
      </li>
    </ul>
  );
};

export default ToDoFilter;

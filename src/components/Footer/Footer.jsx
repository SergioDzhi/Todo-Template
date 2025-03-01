import ToDoFilter from "../ToDoFilter/ToDoFilter";

function Footer({ todos, handleDelCompleted, setStatusTask }) {
  const activeCount = todos.filter((task) => task.done).length;
  const completedCount = todos.length - activeCount;

  return (
    <footer className="footer">
      <span className="todo-count">{completedCount} items left</span>

      <ToDoFilter setStatusTask={setStatusTask} />

      <button
        className="clear-completed"
        onClick={() => handleDelCompleted(todos.done)}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;

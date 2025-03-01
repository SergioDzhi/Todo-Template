import ToDoFilter from "../ToDoFilter/ToDoFilter";
import PropTypes from "prop-types";

function Footer({ todos = [], handleDelCompleted = () => {}, setStatusTask }) {
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

Footer.propTypes = {
  handleDelCompleted: PropTypes.func,
  todos: PropTypes.instanceOf(Array),
};

export default Footer;

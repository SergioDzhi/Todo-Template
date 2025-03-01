import Task from "../Task/Task";
import PropTypes from "prop-types";

const ToDoList = ({
  todoTasks,
  handleRemove = () => {},
  handleCheck = () => {},
}) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todoTasks.map((todo) => (
          <Task
            key={todo.id}
            handleRemove={handleRemove}
            todo={todo}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
    </section>
  );
};

ToDoList.propTypes = {
  todoTasks: PropTypes.instanceOf(Array),
  handleRemove: PropTypes.func,
  handleCheck: PropTypes.func,
};

export default ToDoList;

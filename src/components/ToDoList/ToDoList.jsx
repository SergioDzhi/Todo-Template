import Task from "../Task/Task";

const ToDoList = ({ todoTasks, handleRemove, handleCheck }) => {
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

export default ToDoList;

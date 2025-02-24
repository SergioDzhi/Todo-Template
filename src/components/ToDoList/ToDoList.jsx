import Task from "../Task/Task";

const ToDoList = ({ todos, handleRemove, handleSubmit }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Task
            key={index}
            handleRemove={handleRemove}
            todo={todo}
            index={index}
            onSubmit={handleSubmit}
          />
        ))}
      </ul>
    </section>
  );
};

export default ToDoList;

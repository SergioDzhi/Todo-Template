import { useState } from "react";

const NewTaskForm = ({ setTodos }) => {
  const [newTask, setNewTask] = useState("");

  const handleChangeInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, newTask]);
    setNewTask("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          name="input"
          value={newTask}
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
};

export default NewTaskForm;

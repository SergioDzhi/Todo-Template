import { useState } from "react";

let id = 1;

const NewTaskForm = ({ setTodoTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleChangeInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newObj = {
      id: id++,
      value: newTask,
      done: false,
      date: Date(),
    };

    setTodoTasks((todoTasks) => [...todoTasks, newObj]);
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

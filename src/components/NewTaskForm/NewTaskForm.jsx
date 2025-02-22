import { useState } from "react";

const NewTaskForm = () => {
  const [newTask, setNewTask] = useState("");

  const handleChangeInput = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="input"
        value={newTask}
        onChange={handleChangeInput}
      />
    </header>
  );
};

export default NewTaskForm;

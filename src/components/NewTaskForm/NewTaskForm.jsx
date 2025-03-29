import { useState } from "react";

let id = 1;

const NewTaskForm = ({ setTodoTasks, setIsActive }) => {
  const [newTask, setNewTask] = useState("");
  const [time, setTime] = useState({
    minute: "",
    second: "",
  });

  const [countdown, setCountdown] = useState(null);

  const handleChangeInput = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") return;

    const totalSeconds =
      parseInt(time.minute || 0) * 60 + parseInt(time.second || 0);

    const newObj = {
      id: id++,
      value: newTask,
      done: false,
      date: Date(),
      countdown: totalSeconds,
    };

    setTodoTasks((prevTasks) => [...prevTasks, newObj]); //

    setNewTask("");
    setTime({ minute: "", second: "" });
    if (time.minute || time.second) {
      setIsActive(true);
    }
  };

  const handleChangeTime = (event) => {
    const { name, value } = event.target;
    setTime((prev) => ({
      ...prev,
      [name]: value.replace(/[^0-9]/g, ""),
    }));
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="formList" onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          name="input"
          value={newTask}
          onChange={handleChangeInput}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          name="minute"
          value={time.minute}
          onChange={handleChangeTime}
          maxLength="2"
          pattern="[0-9]{1,2}"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          name="second"
          value={time.second}
          onChange={handleChangeTime}
          maxLength="2"
          pattern="[0-9]{1,2}"
        />
        <button type="submit" hidden>
          Отправить
        </button>
        {countdown !== null && <div>{formatTime(countdown)}</div>}
      </form>
    </header>
  );
};

export default NewTaskForm;

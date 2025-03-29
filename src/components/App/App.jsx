import { useState } from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import ToDoList from "../ToDoList/ToDoList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const App = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [statusTask, setStatusTask] = useState("All");
  const [isActive, setIsActive] = useState(false);
  const showTask = (arr, status) => {
    if (status === "All") return arr;
    if (status === "Active") {
      return todoTasks.filter((task) => task.done === false);
    }
    if (status === "Completed") {
      return todoTasks.filter((task) => task.done === true);
    }
  };

  const handleCheck = (id) => {
    const idx = todoTasks.findIndex((el) => el.id === id);
    const oldObj = todoTasks[idx];
    const newObj = { ...oldObj, done: !oldObj.done };
    setTodoTasks((prevArr) => prevArr.with(idx, newObj));
  };

  const handleRemove = (taskToRemove) => {
    const newList = todoTasks.filter((task) => task.id !== taskToRemove);
    setTodoTasks(newList);
  };

  const handleDelCompleted = () => {
    const newList = todoTasks.filter((task) => !task.done === true);
    setTodoTasks(newList);
  };

  return (
    <>
      <NewTaskForm setTodoTasks={setTodoTasks} setIsActive={setIsActive} />
      <ToDoList
        todoTasks={showTask(todoTasks, statusTask)}
        handleRemove={handleRemove}
        handleCheck={handleCheck}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <Footer
        todos={todoTasks}
        handleDelCompleted={handleDelCompleted}
        setStatusTask={setStatusTask}
      />
    </>
  );
};
export default App;

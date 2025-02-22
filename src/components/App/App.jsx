import { useState } from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import ToDoList from "../ToDoList/ToDoList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const App = () => {
  const [todos, setTodos] = useState(["WebCore", "JavaScript", "React JS"]);

  const handleRemove = (taskToRemove) => {
    const newList = todos.filter((task) => task !== taskToRemove);
    setTodos(newList);
  };

  return (
    <>
      <NewTaskForm />
      <ToDoList todos={todos} handleRemove={handleRemove} />
      <Footer />
    </>
  );
};
export default App;

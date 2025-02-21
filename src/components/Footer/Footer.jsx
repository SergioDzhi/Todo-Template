import ToDoFilter from "../ToDoFilter/ToDoFilter";

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ToDoFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;

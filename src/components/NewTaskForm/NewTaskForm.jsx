const NewTaskForm = (props) => {
  const { value, onChange } = props;

  return (
    <header className="header">
      <h1>todos</h1>

      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="input"
        value={value}
        onChange={onChange}
      />
    </header>
  );
};

export default NewTaskForm;

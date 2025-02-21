import { formatDistance } from "date-fns";
import { useState } from "react";

const Task = ({ handleRemove, todo }) => {
  const [completed, setCompleted] = useState(false);

  const newFormat = formatDistance(new Date(), new Date(), {
    addSuffix: true,
  });

  return (
    <li className={completed ? "completed" : undefined}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
        />
        <label htmlFor="checkbox">
          <span className="description">{todo}</span>
          <span className="created">created {newFormat} </span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => handleRemove(todo)}
        ></button>
      </div>
    </li>
  );
};

export default Task;

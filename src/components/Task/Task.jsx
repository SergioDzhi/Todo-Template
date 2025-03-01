import { formatDistanceToNow } from "date-fns";
import KG from "date-fns/locale/en-AU";
import PropTypes from "prop-types";

const Task = ({
  handleRemove = () => {},
  todo: { id, done, value, date },
  handleCheck = () => {},
}) => {
  const timeAddTask = formatDistanceToNow(date, {
    includeSeconds: true,
    locale: KG,
    addSuffix: true,
  });

  const handleCheckInput = () => {
    handleCheck(id);
  };

  return (
    <li className={done ? "completed" : undefined}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleCheckInput}
          checked={done}
        />
        <label htmlFor="checkbox">
          <span className="description">{value}</span>
          <span className="created">created {timeAddTask} </span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => handleRemove(id)}
        ></button>
      </div>
    </li>
  );
};

Task.propTypes = {
  value: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  done: PropTypes.bool,
  id: PropTypes.number,
  handleRemove: PropTypes.func,
  handleCheck: PropTypes.func,
};

export default Task;

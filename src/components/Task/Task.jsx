import { formatDistanceToNow } from "date-fns";
import KG from "date-fns/locale/en-AU";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Task = ({
  isActive,
  setIsActive,
  handleRemove = () => {},
  todo: { id, done, value, date, countdown },
  handleCheck = () => {},
}) => {
  const [seconds, setSeconds] = useState(countdown || 0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (countdown !== undefined && countdown > 0) {
            return prevSeconds > 0 ? prevSeconds - 1 : prevSeconds;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

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

        <label>
          <span className="description">{value}</span>
          <div className="label">
            <button className=" icon-play" onClick={() => setIsActive(true)} />
            <button
              className=" icon-pause"
              onClick={() => setIsActive(false)}
            />
            {formatTime(seconds)}
          </div>

          <span className="created">created {timeAddTask}</span>
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
  todo: PropTypes.shape({
    value: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    done: PropTypes.bool,
    id: PropTypes.number,
  }),
  handleRemove: PropTypes.func,
  handleCheck: PropTypes.func,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default Task;

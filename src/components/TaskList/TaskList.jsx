import Task from '../Task/task';
import { formatDistance } from 'date-fns/formatDistance';

const TaskList = () => {
  const newFormat = formatDistance(new Date(), new Date(), {
    addSuffix: true,
  });

  return (
    <section className='main'>
      <ul className='todo-list'>
        <li className='completed'>
          <div className='view'>
            <input
              className='toggle'
              defaultChecked={false}
              id='checkbox'
              type='checkbox'
            ></input>
            <label htmlFor='checkbox'>
              <span className='description'>Completed task</span>
              <span className='created'>created {newFormat} </span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy'></button>
          </div>
        </li>
        <Task />
        <li>
          <div className='view'>
            <input
              className='toggle'
              defaultChecked={false}
              id='checkbox1'
              type='checkbox'
            ></input>
            <label htmlFor='checkbox1'>
              <span className='description'>Active task</span>
              <span className='created'>created {newFormat} </span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy'></button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TaskList;

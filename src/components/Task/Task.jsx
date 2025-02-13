const Task = () => {
  return (
    <li className='editing'>
      <div className='view'>
        <input
          className='toggle'
          id='checkbox3'
          defaultChecked={false}
          type='checkbox'
        ></input>
        <label htmlFor='checkbox3'>
          <span className='description'>Editing task</span>
          <span className='created'>created 5 minutes ago</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>
      <input
        type='text'
        className='edit'
        name='edit'
        defaultValue='Editing task'
      ></input>
    </li>
  );
};

export default Task;

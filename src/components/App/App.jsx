import { useState } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';

const App = () => {
  const [currentValue, setMessage] = useState('');

  const handleChangeTask = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <NewTaskForm
        value={currentValue}
        onChange={handleChangeTask}
      />
      <TaskList />
      <Footer />
    </>
  );
};

export default App;

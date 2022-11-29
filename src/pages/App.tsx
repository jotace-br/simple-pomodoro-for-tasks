import { useState } from 'react';
import { Stopwatch } from '../components/Stopwatch';
import { Form } from '../components/Form';
import { List } from '../components/Lista';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  };

  const finishTask = () => {
    if (selected) {
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className={style['app-style']}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selected={selected} finishTask={finishTask} />
    </div>
  );
};

export default App;

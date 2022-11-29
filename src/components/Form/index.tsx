import React, { useState } from 'react';
import { ITask } from '../../types/ITask';
import { Button } from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const Form = ({ setTasks }: FormProps) => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');

  const createNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask('');
    setTime('00:00');
  };

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTask(e.target.value);

  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTime(e.target.value);

  return (
    <form className={style['new-task']} onSubmit={createNewTask}>
      <div className={style['input-container']}>
        <label htmlFor='task'>Adicione um novo estudo</label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='O que você quer estudar'
          required
          onChange={handleChangeTask}
          value={task}
        />
      </div>
      <div className={style['input-container']}>
        <label htmlFor='time'>Tempo</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          required
          onChange={handleChangeTime}
          value={time}
        />
      </div>
      <Button type='submit'>Adicionar</Button>
    </form>
  );
};

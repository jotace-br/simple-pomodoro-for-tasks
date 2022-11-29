import { ITask } from '../../../types/ITask';
import style from './Item.module.scss';

interface ItemProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export const Item = ({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: ItemProps) => {
  const handleSelectTask = () =>
    !completed && selectTask({ task, time, selected, completed, id });

  return (
    <li
      className={`${style.item} ${selected ? style['selected-item'] : ''} ${
        completed ? style['completed-item'] : ''
      }`}
      onClick={handleSelectTask}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.finished} aria-label='completed-task'></span>
      )}
    </li>
  );
};

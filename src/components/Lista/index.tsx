import { ITask } from '../../types/ITask';
import { Item } from './Item';
import style from './List.module.scss';

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style['tasks-list']}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
};

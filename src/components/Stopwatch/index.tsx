import { Button } from '../Button';
import style from './Cronometer.module.scss';
import { ITask } from '../../types/ITask';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { Clock } from './Clock';

interface StopwatchProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export const Stopwatch = ({ selected, finishTask }: StopwatchProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const counterToZero = (counter = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return counterToZero(counter - 1);
      }
      finishTask();
    }, 1000);
  };

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style['clock-wrapper']}>
        <Clock time={time} />
      </div>
      <Button onClick={() => counterToZero(time)}>Começar!</Button>
    </div>
  );
};

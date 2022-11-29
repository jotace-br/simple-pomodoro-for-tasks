import style from './Clock.module.scss';

interface ClockProps {
  time: number | undefined;
}

export const Clock = ({ time = 0 }: ClockProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style['clock-number']}>{formattedMinutes[0]}</span>
      <span className={style['clock-number']}>{formattedMinutes[1]}</span>
      <span className={style['clock-divider']}>:</span>
      <span className={style['clock-number']}>{formattedSeconds[0]}</span>
      <span className={style['clock-number']}>{formattedSeconds[1]}</span>
    </>
  );
};

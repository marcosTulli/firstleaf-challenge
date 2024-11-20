import * as React from 'react';
import * as styles from './index.module.scss';
import { useCountdown } from '../../hooks/';

interface ICountdownProps {
  seconds: number;
  label?: string;
  loop?: boolean;
  customClass?: string;
  onFinish?: () => void;
}

const Countdown: React.FC<ICountdownProps> = ({
  seconds: initialSeconds,
  label = 'Reserving your wines for',
  loop = false,
  customClass = '',
  onFinish = () => { }
}) => {

  const { counter, timerClassName } = useCountdown(
    {
      initialSeconds,
      loop,
      onFinish
    });

  return (
    <div className={`${styles.countdown} ${customClass}`} >
      {label && <div className={`${styles.label} countdown-label`}>{label}</div>}
      <div className={`${styles.counter} ${styles[timerClassName]}`}>{counter}</div>
    </div>
  );
};

export default Countdown;
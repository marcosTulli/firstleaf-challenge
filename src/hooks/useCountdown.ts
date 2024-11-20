import * as React from 'react';

interface ICountdownProps {
    initialSeconds: number;
    loop?: boolean;
    onFinish?: () => void;
}

const useCountdown = ({ initialSeconds, loop, onFinish }: ICountdownProps) => {
    const [seconds, setSeconds] = React.useState<number>(initialSeconds);
    const [timerClassName, setTimerClassName] = React.useState<string>('onTime');

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const counter = `00:${`0${minutes}`.slice(-2)}:${`0${remainingSeconds}`.slice(-2)}`;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                const end = loop ? initialSeconds : 0;
                const remaining = prevSeconds > 0 ? prevSeconds - 1 : end;
                return remaining;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [loop, initialSeconds]);

    React.useEffect(() => {
        if (seconds === 0 && onFinish) {
            onFinish();
        }

        if (seconds <= 30) {
            setTimerClassName('timeUp');
        }
    }, [seconds, onFinish]);
    return { counter, timerClassName };
};

export default useCountdown;
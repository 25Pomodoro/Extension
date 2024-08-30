import { useEffect, useState } from "react";
import { useTimer } from 'react-timer-hook';

function Timer() {
    const [sessionOn, setSessionOn] = useState(false);
    const [expiryTimestamp, setExpiryTimestamp] = useState(null);

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    useEffect(() => {
        if (expiryTimestamp) {
            start(); // Start the timer only if expiryTimestamp is set
        }
    }, [expiryTimestamp, start]);

    const startTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1500); // 25 minutes timer
        setExpiryTimestamp(time);
    };

    const pauseTimer = () => {
        pause();
    };

    const resumeTimer = () => {
        if (!sessionOn) {
            startSession();
        } else {
            resume();
        }
    };

    const restartTimer = () => {
        startTimer(); // Reset the timer
        restart(expiryTimestamp);
    };

    const startSession = () => {
        setSessionOn(true);
        startTimer(); // Ensure expiryTimestamp is set before starting
    };

    return (
        <div className="flex flex-col justify-center mt-8 gap-3">
            <div>
                <h1 className="font-bold text-4xl select-none cursor-default">{minutes}:{seconds}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <button
                    className="p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400"
                    onClick={isRunning ? pauseTimer : resumeTimer}
                >
                    {isRunning ? "Pause session" : "Start session"}
                </button>

                {sessionOn && (
                    <button
                        className="p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400"
                        onClick={restartTimer}
                    >
                        Reset session
                    </button>
                )}
            </div>
        </div>
    );
}

export default Timer;

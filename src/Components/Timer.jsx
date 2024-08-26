import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState("25:00");
    const [isRunning, setIsRunning] = useState(false);
    const [sessionOn, setSessionOn] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            const [minutes, seconds] = time.split(':').map(Number);

            timer = setInterval(() => {
                if (minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    setIsRunning(false);
                } else {
                    const newSeconds = seconds === 0 ? 59 : seconds - 1;
                    const newMinutes = seconds === 0 ? minutes - 1 : minutes;
                    const newTime = `${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
                    setTime(newTime);
                }
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, time]);

    const startTimer = () => {
        setSessionOn(true);
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime("25:00");
        setSessionOn(false);
    };

    return (
        <div className="flex flex-col justify-center mt-8 gap-3">
            <div>
                <h1 className="font-bold text-4xl select-none cursor-default">{time}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <button
                    className="p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400"
                    onClick={startTimer}
                >
                    {isRunning ? "Pause session" : "Start session"}
                </button>
                {sessionOn && (
                    <button
                        className="p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400"
                        onClick={resetTimer}
                    >
                        Reset session
                    </button>
                )}
            </div>
        </div>
    );
}

export default Timer;

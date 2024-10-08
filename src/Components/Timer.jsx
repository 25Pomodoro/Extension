import { useEffect, useState } from "react";
import fiveMinutesLeftNotification from "../Helpers/FiveMinutesLeftNotification.jsx";


function Timer() {
    const [time, setTime] = useState("25:00");
    const [isRunning, setIsRunning] = useState(false);
    const [sessionOn, setSessionOn] = useState(false);

    // sends a message to the background script to get the current timer status
    useEffect(() => {
        // Fetch the current timer status when the component mounts
        chrome.runtime.sendMessage({ action: "getTimerStatus" }, (response) => {
            if (response) {
                setIsRunning(response.isRunning);
                setSessionOn(response.isRunning || response.timeRemaining < 1500);
                updateDisplay(response.timeRemaining);
            }
        });
    }, []);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                chrome.runtime.sendMessage({ action: "getTimerStatus" }, (response) => {
                    if (response) {
                        const minutes = Math.floor(response.timeRemaining / 60);
                        const seconds = response.timeRemaining % 60;
                        setTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
                    }
                });
            }, 1000);  // get new time every 1 second
        }

        if (time === "24:50" || time === "15:00" || time === "10:00" || time === "05:00") {
            fiveMinutesLeftNotification();
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const updateDisplay = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        setTime(`${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`);
    };

    const startTimer = () => {
        if (!isRunning) {
            chrome.runtime.sendMessage({ action: "startTimer" }, () => {
                setIsRunning(true);
            });
        } else {
            chrome.runtime.sendMessage({ action: "stopTimer" }, () => {
                setIsRunning(false);
            });
        }
        setSessionOn(true);
    };

    const resetTimer = () => {
        chrome.runtime.sendMessage({ action: "resetTimer" }, () => {
            setIsRunning(false);
            setSessionOn(false);
            setTime("25:00");
        });
    };

    return (
        <div className="flex flex-col justify-center mt-8 gap-3">
            <div>
                <p className="font-bold text-4xl select-none cursor-default text-gray-900">{time}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <button
                    className="p-4 bg-gray-900 rounded-md w-5/12 drop-shadow-xl shadow-teal-400 hover:scale-110 transition delay-75 ease-in-out"
                    onClick={startTimer}
                >
                    <p className={"text-gray-50"}>
                        {isRunning ? "Pause session" : "Start session"}
                    </p>
                </button>
                {sessionOn && (
                    <button
                        className="p-4 bg-gray-900 rounded-md w-5/12 drop-shadow-xl shadow-teal-400 hover:scale-110 transition delay-75 ease-in-out"
                        onClick={resetTimer}
                    >
                        <p className={"text-gray-50"}>
                            Reset Session
                        </p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Timer;

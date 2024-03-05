import {useEffect, useState} from "react";
import clickSound from "../assets/sounds/sessionStarted.mp3";


function Timer() {
    const [time, setTimer] = useState("25:00");
    const [isRunning, setIsRunning] = useState(false);
    const [sessionOn, setSessionOn] = useState(false);

    let soundEffect = new Audio(chrome.runtime.getURL(clickSound));

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
                    const newTime = `${newMinutes}:${newSeconds}`;
                    setTimer(newTime);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, time, sessionOn]);


    const startTimer = () => {
        if (!sessionOn){
            soundEffect.play();
        }
        setSessionOn(true);
        if (!isRunning) {
            document.getElementById("button-1").innerHTML = "Pause session";
            setIsRunning(true);
        } else {
            document.getElementById("button-1").innerHTML = "Continue session";
            clearInterval()
            setIsRunning(false);

        }
    };

    const resetTimer = () => {
        clearInterval();
        setIsRunning(false);
        setTimer("25:00");
        setSessionOn(false);
        document.getElementById("button-1").innerHTML = "Start session";
    };

    return (
        <div className="flex flex-col justify-center mt-8 gap-3">
            <div className={""}>
                <h1 className={"font-bold text-4xl select-none cursor-default"}>{time}</h1>
            </div>
            <div className={"flex flex-col justify-center items-center gap-3"}>
                <button className={"p-4 bg-gray-100 rounded-md w-5/12"} id={"button-1"} onClick={startTimer}>Start session</button>
                <button className={"p-4 bg-gray-100 rounded-md w-5/12"} id={"button-2"} onClick={resetTimer} hidden={!sessionOn}>Reset session</button>
            </div>
        </div>
    )
    }

export default Timer;
import './App.css';
import logo from './assets/logo.png'; // Replace with the actual path to your logo
import { useState, useEffect } from 'react';

function App() {
    const [time, setTimer] = useState("25:00");
    const [isRunning, setIsRunning] = useState(false);
    const [sessionOn, setSessionOn] = useState(false);

    let clickSound = new Audio(chrome.runtime.getURL(".assets/buttonclick.mp3"));

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
        if (sessionOn) {
            document.querySelector(".resetButton").style.display = "block";
        } else {
            document.querySelector(".resetButton").style.display = "none";
        }
        return () => clearInterval(timer);
    }, [isRunning, time, sessionOn]);


    const startTimer = () => {
        void clickSound.play();
        setSessionOn(true);
        if (!isRunning) {
            document.querySelector(".mainButton").innerHTML = "Pause session";
            setIsRunning(true);
        } else {
            document.querySelector(".mainButton").innerHTML = "Continue session";
            clearInterval()
            setIsRunning(false);

        }
    };

    const resetTimer = () => {
        clearInterval();
        setIsRunning(false);
        setTimer("25:00");
        setSessionOn(false);
        takeOverlayOff();
    };

    const takeOverlayOff = () => {
        document.querySelector(".overlay").style.display = "none";
    }

    const showOverlay = () => {
        document.querySelector(".overlay").style.display = "block";
    }

    return (
        <div className={"wrapper"}>
            <svg
                fill="#000000" width="25px" height="25px"
                viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"
                className={"resetButton"} onClick={showOverlay}>
                <path
                    d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
                />
            </svg>

            <div>
                <img src={logo} className="logo" alt="Pomodoro logo" onClick={() => {
                    window.open('http://stackoverflow.com', '_blank');
                }}/>
            </div>
            <h1>25Pomodoro</h1>

            <div className="timer">
                <span>{time}</span>
            </div>

            <div className="card">
                <button onClick={startTimer} className={"mainButton"}>Start session</button>
            </div>
            <p className="note">Stay tuned for our updates</p>

            <div className={"overlay"}>
                <p>Are you sure you <br/> want to reset the timer?</p>
                <section className={"buttonsOverlay"}>
                    <button onClick={resetTimer}>Yes</button>
                    <button onClick={takeOverlayOff}>No</button>
                </section>
            </div>
        </div>
    );
}

export default App;

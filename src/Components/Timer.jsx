import {useEffect, useState} from "react";
import {startTimer, resetTimer, sessionOn, time} from "../background";

function Timer() {


    return (
        <div className="flex flex-col justify-center mt-8 gap-3">
            <div className={""}>
                <h1 className={"font-bold text-4xl select-none cursor-default"}>{time}</h1>
            </div>
            <div className={"flex flex-col justify-center items-center gap-3"}>
                <button className={"p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400"} id={"button-1"} onClick={startTimer}>Start session</button>
                <button className={"p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400"} id={"button-2"} onClick={resetTimer} hidden={!sessionOn}>Reset session</button>
            </div>
        </div>
    )
    }

export default Timer;
import profile from "../assets/icons/profile.svg";
import tasks from "../assets/icons/tasks.svg";
import theme from "../assets/icons/theme.svg";
import { useContext } from "react";
import UserDataContext from "../Context/UserDataContext.jsx";

function Data() {
    const userData = useContext(UserDataContext);
    const firstName = userData?.firstName || '';

    return (
        <div className={"flex flex-col justify-center items-center gap-3"}>
            <div className={"flex flex-col justify-center"}>
                <p className={"text-2xl font-semibold text-gray-50 dark:text-gray-900"}>
                    {firstName ? `Welcome ${firstName}` : 'Welcome'}
                </p>
                <p className={"text-md font-semibold text-gray-50 dark:text-gray-900"}>Let's get productive 🚀</p>
            </div>

            <div className={"flex flex-row w-8/12 justify-center items-center gap-5"}>
                <img className={"hover:scale-110 hover:cursor-pointer ease-in-out transition-all"} src={profile} alt={"profile icon"} width={50}/>
                <img className={"hover:scale-110 hover:cursor-pointer ease-in-out transition-all"} src={tasks} alt={"tasks icon"} width={50}/>
                <img className={"hover:scale-110 hover:cursor-pointer ease-in-out transition-all"} src={theme} alt={"theme icon"} width={50}/>
            </div>
        </div>
    );
}

export default Data;

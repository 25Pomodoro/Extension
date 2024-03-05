import spotify from "../assets/icons/spotify.svg";
import profile from "../assets/icons/profile.svg";
import tasks from "../assets/icons/tasks.svg";
import theme from "../assets/icons/theme.svg";

function Data() {
    return (
        <div className={"flex flex-col justify-center items-center gap-3"}>
            <div className={"flex flex-col justify-center"}>
                <p className={"text-2xl font-semibold"}>Welcome Emad</p>
                <p className={"text-md font-semibold"}>Let's get productive 🚀</p>
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
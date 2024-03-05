import HeaderLogo from "../assets/logos/logo.svg";



function Header() {
  return (
    <div className={"flex flex-row justify-between items-center p-3 mb-5"}>
        <div>
            <img src={HeaderLogo} alt="Pomodoro Timer" width={75}/>
        </div>
        <div>
            <p className={"text-2xl font-semibold"}>25Pomodoro</p>
        </div>
    </div>
  );
}

export default Header;
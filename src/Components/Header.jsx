import HeaderLogo from "../assets/logos/logo.svg";



function Header() {

  const redirectToHome = () => {
    chrome.tabs.create({ url: 'https://25Pomodoro.com' });
  }

  return (
    <div className={"flex flex-row justify-between items-center p-3 mb-5"}>
        <div>
            <img onClick={redirectToHome} className={"hover:cursor-pointer select-none"} src={HeaderLogo} alt="Pomodoro Timer" width={75}/>
        </div>
        <div>
            <p onClick={redirectToHome} className={"text-2xl font-semibold hover:cursor-pointer select-none"}>25Pomodoro</p>
        </div>
    </div>
  );
}

export default Header;
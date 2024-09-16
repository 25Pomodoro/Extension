import HeaderLogo from "../../public/assets/logos/logo.svg";

function Header() {
  return (
    <div className={"flex flex-row justify-between items-center p-3 mb-5"}>
      <div>
        <img
          className={"hover:cursor-pointer select-none"}
          src={HeaderLogo}
          alt="Pomodoro Timer"
          width={75}
        />
      </div>
      <div>
        <p
          className={
            "text-2xl font-semibold hover:cursor-pointer select-none text-gray-900"
          }
        >
          25Pomodoro
        </p>
      </div>
    </div>
  );
}

export default Header;

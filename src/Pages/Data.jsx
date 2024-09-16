import darkAccount from "/assets/icons/dark-account.svg";
import darkLogout from "/assets/icons/dark-logout.svg";

import { useContext } from "react";
import UserDataContext from "../Context/UserDataContext.jsx";

function Data() {
  const userData = useContext(UserDataContext);
  const firstName = userData?.firstName || "";

  const logout = () => {
    localStorage.removeItem("25Pom-user-data");
    window.location.reload();
    chrome.runtime.sendMessage({ action: "resetTimer" }, () => {});
  };

  return (
    <div className={"flex flex-col justify-center items-center gap-3 mt-auto"}>
      <div className={"flex flex-col justify-center"}>
        <p className={"text-2xl font-semibold text-gray-900"}>
          {firstName ? `Welcome ${firstName}` : "Welcome"}
        </p>
        <p className={"text-md font-semibold text-gray-900"}>
          Let's get productive 🚀
        </p>
      </div>

      <div
        className={"flex flex-row w-8/12 justify-center items-center gap-3.5"}
      >
        <img
          src={darkAccount}
          alt={"Account"}
          className={
            "w-10 h-auto cursor-pointer hover:scale-110 transition delay-100 ease-in-out"
          }
        />
        <img
          onClick={logout}
          src={darkLogout}
          alt={"Logout"}
          className={
            "w-10 h-auto cursor-pointer hover:scale-110 transition delay-100 ease-in-out"
          }
        />
      </div>
    </div>
  );
}

export default Data;

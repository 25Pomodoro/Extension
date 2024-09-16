import google from "/assets/icons/google.svg";
import sign_in_with_google from "../Hooks/sign_in_with_google.jsx";

function UserAuth() {
  return (
    <div>
      <div className={"flex flex-col gap-4 align-middle items-center"}>
        <button
          className="p-2.5 h-15 w-10/12 bg-gray-200 rounded-md drop-shadow-xl shadow-teal-400 hover:scale-105 transition delay-75 ease-in-out"
          onClick={sign_in_with_google}
        >
          <div className={"flex flex-row justify-center gap-2"}>
            <span className={"text-gray-900 font-bold"}>
              Sign in with Google
            </span>
            <img src={google} alt={"Google"} className={"w-5 h-auto"} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserAuth;

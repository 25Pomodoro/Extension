import Spotify from "./Spotify.jsx";

function Footer() {


  return (
    <div className={"flex flex-row justify-between p-2 bottom-0 absolute w-full"}>
      <p className={"font-semibold text-gray-50 dark:text-gray-900"}>Created by <a href={'https://github.com/Emad-Eldin-G'}>Emad-Eldin-G</a></p>

        <div>
            < Spotify />
        </div>
    </div>
  );
}

export default Footer;
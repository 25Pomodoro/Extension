import spotify from "../assets/icons/spotify.svg";

function Footer() {

  const goToSpotifyProfile = () => {
    chrome.tabs.create({ url: 'https://open.spotify.com/user/31zg4v7g7z6p5z6z5v7z7z4' });
  }

  return (
    <div className={"flex flex-row justify-between p-2 bottom-0 absolute w-full"}>
      <p className={"font-semibold"}>Created by <a href={'https://github.com/Emad-Eldin-G'}>Emad-Eldin-G</a></p>

        <div>
            <img className={"hover:cursor-pointer hover:scale-105 transition-all ease-in-out"} onClick={goToSpotifyProfile} src={spotify} alt="spotify icon" width={20}/>
        </div>
    </div>
  );
}

export default Footer;
import spotify from "../assets/icons/spotify.svg";

function Footer() {
  return (
    <div className={"flex flex-row justify-between p-2 bottom-0 absolute w-full"}>
      <p className={"font-semibold"}>Created by <a>Emad-Eldin-G</a></p>

        <div>
            <img src={spotify} alt="spotify icon" width={20}/>
        </div>
    </div>
  );
}

export default Footer;
import spotify from "../assets/icons/spotify.svg";

function Footer() {


  return (
    <div className={"flex flex-row justify-between p-2 bottom-0 absolute w-full"}>
      <p className={"font-semibold"}>Created by <a href={'https://github.com/Emad-Eldin-G'}>Emad-Eldin-G</a></p>

        <div>
            <img className={"hover:cursor-pointer hover:scale-105 transition-all ease-in-out"} src={spotify} alt="spotify icon" width={20}/>
        </div>
    </div>
  );
}

export default Footer;
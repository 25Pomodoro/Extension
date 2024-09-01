import spotify from '../../public/assets/icons/spotify.svg';


function Spotify() {

    const getUserSpotifyToken = async () => {
        // first user authenticates on spotify
        // then we get the token

        const redirect_uri = 'http://localhost:3000';
        window.open('https://accounts.spotify.com/authorize?client_id=*client_id*&response_type=code&redirect_uri=*redirect_uri*', '_blank');

        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic *credentials*',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: 'grant_type=client_credentials'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <img className={"hover:cursor-pointer hover:scale-105 transition-all ease-in-out"}
             src={spotify}
             alt="spotify icon"
             width={20}
             onClick={getUserSpotifyToken}
        />
    );
}

export default Spotify;

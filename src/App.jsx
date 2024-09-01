import './App.css';
import Timer from './Components/Timer.jsx';
import Header from './Components/Header.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import UserAuth from "./Components/UserAuth.jsx";
import UserDataContext from "./Context/UserDataContext.jsx";
import {useEffect, useState} from "react";

function App() {

    // check if the user is logged in by checking data json in browser local storage
    const [UserLoggedIn, setUserLoggedIn] = useState(false);
    const [UserData, setUserData] = useState(null);


    useEffect(() => {
        if (localStorage.getItem("25Pom-user-data")) {
            setUserLoggedIn(true);
            setUserData(JSON.parse(localStorage.getItem("25Pom-user-data")));
        } else {
            setUserLoggedIn(false);
        }
    }, []);


    return (
        <div className="App">
            <Header />
            {UserLoggedIn ?
                <div>
                    <UserDataContext.Provider value={UserData}>
                        <Data />
                    </UserDataContext.Provider>
                    <Timer />
                </div>
                :
                <UserAuth loginControl={setUserLoggedIn}/>
            }
            <Footer />
        </div>
    );
}

export default App;

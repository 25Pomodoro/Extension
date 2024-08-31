import './App.css';
import Timer from './Components/Timer.jsx';
import Header from './Components/Header.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import UserAuth from "./Components/UserAuth.jsx";
import {useEffect, useState} from "react";

function App() {

    // check if the user is logged in by checking data json in browser local storage
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    return (
        <div className="App">
            <Header />
            {userLoggedIn ?
                <div>
                    <Data name={localStorage.getItem('25Pom-user-data').objects.firstName}/>
                    <Timer />
                </div>
                :
                <UserAuth loginStatus={setUserLoggedIn}/>
            }
            <Footer />
        </div>
    );
}

export default App;

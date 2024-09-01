import './App.css';
import Timer from './Components/Timer.jsx';
import Header from './Components/Header.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import UserAuth from "./Components/UserAuth.jsx";
import UserDataContext from "./Context/UserDataContext.jsx";
import { useEffect, useState } from "react";

function App() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("25Pom-user-data");
        if (storedData) {
            setUserLoggedIn(true);
            setUserData(JSON.parse(storedData));
        } else {
            setUserLoggedIn(false);
        }
    }, []);

    return (
        <div className="App">
            <Header />
            {userLoggedIn ? (
                <div>
                    <UserDataContext.Provider value={userData}>
                        <Data />
                    </UserDataContext.Provider>
                    <Timer />
                </div>
            ) : (
                <UserAuth loginControl={setUserLoggedIn} />
            )}
            <Footer />
        </div>
    );
}

export default App;

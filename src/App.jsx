import "./App.css";
import Timer from "./Components/Timer.jsx";
import Header from "./Pages/Header.jsx";
import Data from "./Pages/Data.jsx";
import Footer from "./Pages/Footer.jsx";
import UserAuth from "./Pages/UserAuth.jsx";
import { useEffect, useState } from "react";
import init_firebase from "./Hooks/init_firebase.jsx";
import { getAuth } from "firebase/auth";

function App() {
  init_firebase();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    let auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
  });

  return (
    <div className="App">
      <Header />
      {userLoggedIn ? (
        <div>
          <Data />
          <Timer />
        </div>
      ) : (
        <UserAuth />
      )}
      <Footer />
    </div>
  );
}

export default App;

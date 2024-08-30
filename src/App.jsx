import './App.css';
import Timer from './Components/Timer.jsx';
import Header from './Components/Header.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import UserAuth from "./Components/UserAuth.jsx";

function App() {
    // check if the user is logged in by checking data json in browser local storage
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const data = localStorage.getItem('25Pom-data');
    if (data) {
        setUserLoggedIn(true);
    }

    return (
        <>
        <Header />
        <Timer />
        <Data />
        <Footer />
        </>
    );
}

export default App;

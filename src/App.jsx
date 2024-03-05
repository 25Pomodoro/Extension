import './App.css';
import Timer from './Components/Timer.jsx';
import Header from './Components/Header.jsx';
import Data from './Components/Data.jsx';
import Footer from './Components/Footer.jsx';
import { useState, useEffect } from 'react';

function App() {

    return (
        <>
        <Header />
        <Data />
        <Timer />
        <Footer />
        </>
    );
}

export default App;

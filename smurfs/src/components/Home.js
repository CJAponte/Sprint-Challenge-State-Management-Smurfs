import React from 'react';
import './App.css';
import Village from "../img/smurfVillage.jpg"

const Home = () => {
    return(
        <div>
            <h1>Welcome to the Village!</h1>
            <img src={Village} alt='village' className="villageimg"/>
        </div>
    )
}

export default Home; 
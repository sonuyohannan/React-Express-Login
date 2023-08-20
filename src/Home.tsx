import React from "react";
import {useLocation} from 'react-router-dom';


function Home(){
    const location = useLocation();
    return (
        <div className="home">
            <h1>Hi {location.state} </h1>

        </div>
    );
}

export default Home;
import React from "react";
// import './App.css';
// import Header from "../components/Header";
// import App from "../App";

export default function Header(props) {

    return (
        <header className="inner-container">
            <div>Clicky Emoji Game</div>
            <div>{props.message}</div>
            <div>Current Score: {props.currentScore}</div>
            <div>Top Score: {props.topScore}</div>
        </header>
    );
}

// export default App; 
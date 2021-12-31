import React from "react";
import "./NavBar.css";
import metadata from "../data/metadata.json";

const NavBar = () => {
    return (
        <div className="navbar">
            <i className="fab fa-spotify"></i>
            <div className="app-header">{metadata.appName}</div>
        </div>
    );
};

export default NavBar;

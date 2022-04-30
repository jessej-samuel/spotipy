import React from "react";
import "./NavBar.css";
import metadata from "../data/metadata.json";

const NavBar = () => {
    return (
        <div className="navbar">
            <i className="fab fa-spotify"></i>
            <div className="app-header">{metadata.appName}</div>
            <div className="nav-links">
                <a
                    href="https://drago.nl"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fa fa-globe"></i>
                </a>
                <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-spotify"></i>
                </a>
            </div>
        </div>
    );
};

export default NavBar;

import React from "react";
import "./Header.scss";
import NavBar from "./NavBar/NavBar";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <NavBar/>
            </div>
        </div>
    );
};

export default Header;

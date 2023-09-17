import React from "react";
import "./NavBar.scss";
import logo from "./../../../img/649947dfafb04.png";

const NavBar = () => {
    return (
        <div className="navBar">
            <img src={logo} alt="logo" />
            <a href="tel:0971094000">+38 (097) 109-40-00</a>
            <nav className="navBar__menu">
                <li>Головна</li>
                <li>Про нас</li>
                <li>категорії</li>
                <li>Ціни</li>
                <li>Контакти</li>
            </nav>
            <a href="tel:0631094000">+38 (063) 109-40-00</a>
            <div className="navBar__socialLinks">
                <a href="#">img</a>
                <a href="#">img</a>
            </div>
        </div>
    );
};

export default NavBar;

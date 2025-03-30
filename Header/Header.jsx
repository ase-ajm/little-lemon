import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <button className="header__button">
                    <img
                        src="sort.png"
                        alt="Menu"
                        className="header__icon header__icon--menu"
                    />
                </button>

                <div className="header__logo">
                    <img
                        src="lemon.png"
                        alt="Little Lemon"
                        className="header__logo-img"
                    />
                </div>

                <button className="header__button">
                    <img
                        src="shopping-cart.png"
                        alt="Cart"
                        className="header__icon header__icon--cart"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
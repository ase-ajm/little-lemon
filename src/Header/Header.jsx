import React from "react";
import "./Header.css";
import lemonLogo from '../images/lemon.png';
import sortIcon from '../images/sort.png';
import cartIcon from '../images/shopping-cart.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <button className="header__button" aria-label="Menu">
                    <img
                        src={sortIcon}
                        alt="Menu icon"
                        className="header__icon header__icon--menu"
                    />
                </button>

                <div className="header__logo">
                    <img 
                        src={lemonLogo}
                        alt="Little Lemon logo"
                        className="header__logo-img"
                    />
                </div>

                <button className="header__button" aria-label="Shopping cart">
                    <img
                        src={cartIcon}
                        alt="Cart icon"
                        className="header__icon header__icon--cart"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
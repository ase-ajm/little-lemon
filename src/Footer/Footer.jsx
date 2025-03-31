import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Footer.css";
import homeIcon from "../images/home.png";
import orderIcon from "../images/cutlery.png";
import reserveIcon from "../images/calendar.png";
import accountIcon from "../images/user.png";

const Footer = () => {
    const navigate = useNavigate();

    const navHome = () => {
        navigate('/');
    };

    const navMenu = () => {
        navigate('/menu');
    };

    const navReserve = () => {
        navigate('/reserve');
    };

    const navAccount = () => {
        navigate('/account');
    };

    return (
        <footer className="footer-container">
            <div className="footer-items">
                <button className="footer-item" onClick={navHome}>
                    <img src={homeIcon} alt="Home" className="footer-icon" />
                    <h3 className="footer-text">Home</h3>
                </button>

                <button className="footer-item" onClick={navMenu}>
                    <img src={orderIcon} alt="Order" className="footer-icon" />
                    <h3 className="footer-text">Order</h3>
                </button>

                <button className="footer-item" onClick={navReserve}>
                    <img src={reserveIcon} alt="Reserve" className="footer-icon" />
                    <h3 className="footer-text">Reserve</h3>
                </button>

                <button className="footer-item" onClick={navAccount}>
                    <img src={accountIcon} alt="Account" className="footer-icon" />
                    <h3 className="footer-text">Account</h3>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
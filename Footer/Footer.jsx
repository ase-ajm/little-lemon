import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-item">
                <img src="home.png" alt="Home" className="footer-icon" />
                <h3 className="footer-text">Home</h3>
            </div>

            <div className="footer-item">
                <img src="cutlery.png" alt="Order" className="footer-icon" />
                <h3 className="footer-text">Order</h3>
            </div>

            <div className="footer-item">
                <img src="calendar.png" alt="Reservations" className="footer-icon" />
                <h3 className="footer-text">Reserve</h3>
            </div>

            <div className="footer-item">
                <img src="user.png" alt="Account" className="footer-icon" />
                <h3 className="footer-text">Account</h3>
            </div>
        </footer>
    );
};

export default Footer;
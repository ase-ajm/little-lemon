import React from "react";
import "./Recent.css";

import lambArt from "../images/lambArtichokes.jpg";
import tiramisu from "../images/tiramisu.jpg";
import negroni from "../images/Negroni.jpg";

const Recent = () => {
    return (
        <div className="recent-container">
            <div className="recent-header">
                <h2>Recently Ordered</h2>
                <div className="divider"></div>
            </div>

            <div className="recent-items">
                <div className="recent-item">
                    <img src={lambArt} className="recent-image" />
                    <h3>Lamb with Artichokes</h3>
                </div>

                <div className="recent-item">
                    <img src={tiramisu} className="recent-image" />
                    <h3>Tiramisu</h3>
                </div>

                <div className="recent-item">
                    <img src={negroni} className="recent-image" />
                    <h3>Negroni</h3>
                </div>
            </div>
        </div>
    )
}

export default Recent;
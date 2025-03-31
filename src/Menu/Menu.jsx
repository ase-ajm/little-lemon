import React from "react";
import "./Menu.css";
import mozzsticks from "../images/mozzarellasticks.jpg";
import cucumbDil from "../images/cucumber-dil-tatziki.webp";
import dolma from "../images/dolma.jpg";
import copsis from "../images/copsis.jpg";
import breadsticks from "../images/breadsticks.jpg";
import cantik from "../images/cantikpidesi.jpg";
import lambArt from "../images/lambArtichokes.jpg";
import rissoto from "../images/rissotoFunghi.jpg";
import kuru from "../images/kuruFasulye.jpg";
import moussaka from "../images/Moussaka.jpeg";
import capreseSalad from '../images/capreseSalad.jpeg'; // Fixed import name
import sak from "../images/saksuka.jpg";
import vin from "../images/vinagrola.webp";
import enigar from "../images/enginar.jpg";
import fas from "../images/Fasolada.jpg";
import gem from "../images/gemista.jpeg";
import oss from "../images/ossobucco.jpg";
import kun from "../images/kunefe.jpg";
import tira from "../images/tiramisu.jpg";
import can from "../images/canolli.jpg";
import lou from "../images/loukoumades.jpg";
import sut from "../images/sutlac.webp";
import bak from "../images/baklava.jpeg";
import kabak from "../images/kabakTatlisi.webp";
import frappe from "../images/frappe.jpg";
import salep from "../images/salep.jpg";
import negroni from "../images/Negroni.jpg";

const Menu = () => {
    const appetizers = [
        { name: "Mozzarella Sticks", image: mozzsticks, price: 8.99 },
        { name: "Cucumber Dil Tatziki", image: cucumbDil, price: 7.50 },
        { name: "Dolma", image: dolma, price: 9.25 },
        { name: "Çöp şiş", image: copsis, price: 10.99 },
        { name: "Bread Sticks", image: breadsticks, price: 5.50 },
        { name: "Cantık Pidesi", image: cantik, price: 11.75 }
    ];
    
    const entrees = [
        { name: "Lamb with Artichokes", image: lambArt, price: 24.99 },
        { name: "Rissoto ai Fhungi", image: rissoto, price: 18.50 },
        { name: "Kuru Fasulye", image: kuru, price: 16.75 },
        { name: "Moussaka", image: moussaka, price: 19.99 },
        { name: "Şakşuka", image: sak, price: 15.50 },
        { name: "Vinagrola", image: vin, price: 17.25 },
        { name: "Enigar", image: enigar, price: 21.99 },
        { name: "Caprese Salad", image: capreseSalad, price: 14.50 }, // Fixed variable name
        { name: "Fasolada", image: fas, price: 15.99 },
        { name: "Gemista", image: gem, price: 18.75 },
        { name: "Ossobuco", image: oss, price: 26.50 }
    ];
    
    const desserts = [
        { name: "Künefe", image: kun, price: 9.99 },
        { name: "Tiramisu", image: tira, price: 8.50 },
        { name: "Canolli", image: can, price: 7.75 },
        { name: "Loukoumades", image: lou, price: 8.25 },
        { name: "Sütlaç", image: sut, price: 6.99 },
        { name: "Baklava", image: bak, price: 7.50 },
        { name: "Kabak Tatlisi", image: kabak, price: 8.25 }
    ];
    
    const drinks = [
        { name: "Frappé", image: frappe, price: 5.25 }, // Updated to use imported image
        { name: "Salep", image: salep, price: 4.75 }, // Updated to use imported image
        { name: "Negroni", image: negroni, price: 12.50 } // Updated to use imported image
    ];

    return (
        <div className="menu-container">
            <h2>Our Menu!</h2>
            <div>
                <h2>Appetizers</h2>
                <div className="menu-grid">
                    {appetizers.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <h2>Entrées</h2>
                <div className="menu-grid">
                    {entrees.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <h2>Desserts</h2>
                <div className="menu-grid">
                    {desserts.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <h2>Drinks</h2>
                <div className="menu-grid">
                    {drinks.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
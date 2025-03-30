import React from "react";
import "./Menu.css";

const Menu = () => {
    const appetizers = [
        { name: "Mozzarella Sticks", image: "mozzarellasticks.jpg", price: 8.99 },
        { name: "Cucumber Dil Tatziki", image: "cucumber-dil-tatziki.webp", price: 7.50 },
        { name: "Dolma", image: "dolma.jpg", price: 9.25 },
        { name: "Çöp şiş", image: "copsis.jpg", price: 10.99 },
        { name: "Bread Sticks", image: "breadsticks.jpg", price: 5.50 },
        { name: "Cantık Pidesi", image: "cantikpidesi.jpg", price: 11.75 }
    ];
    
    const entrees = [
        { name: "Lamb with Artichokes", image: "lambArtichokes.jpg", price: 24.99 },
        { name: "Rissoto ai Fhungi", image: "rissotoFunghi.jpg", price: 18.50 },
        { name: "Kuru Fasulye", image: "kuruFasulye.jpg", price: 16.75 },
        { name: "Moussaka", image: "Moussaka.jpeg", price: 19.99 },
        { name: "Şakşuka", image: "saksuka.jpg", price: 15.50 },
        { name: "Vinagrola", image: "vinagrola.webp", price: 17.25 },
        { name: "Enigar", image: "enginar.jpg", price: 21.99 },
        { name: "Caprese Salad", image: "capreseSalad.jpeg", price: 14.50 },
        { name: "Fasolada", image: "Fasolada.jpg", price: 15.99 },
        { name: "Gemista", image: "gemista.jpeg", price: 18.75 },
        { name: "Ossobuco", image: "ossobuco.jpg", price: 26.50 }
    ];
    
    const desserts = [
        { name: "Künefe", image: "kunefe.jpg", price: 9.99 },
        { name: "Tiramisu", image: "tiramisu.jpg", price: 8.50 },
        { name: "Canolli", image: "canolli.jpg", price: 7.75 },
        { name: "Loukoumades", image: "loukoumades.jpg", price: 8.25 },
        { name: "Sütlaç", image: "sutlac.webp", price: 6.99 },
        { name: "Baklava", image: "baklava.jpeg", price: 7.50 },
        { name: "Kabak Tatlisi", image: "kabakTatlisi.webp", price: 8.25 }
    ];
    
    const drinks = [
        { name: "Frappé", image: "frappe.jpg", price: 5.25 },
        { name: "Salep", image: "salep.jpg", price: 4.75 },
        { name: "Negroni", image: "Negroni.jpg", price: 12.50 }
    ];

    return (
        <div>
            <h2>Our Menu!</h2>
            <div>
                <h2>Appetizers</h2>
                <div>
                    {appetizers.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <h2>Entrées</h2>
                <div>
                    {entrees.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <h2>Desserts</h2>
                <div>
                    {desserts.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <h2>Drinks</h2>
                <div>
                    {drinks.map((item, index) => (
                        <div key={index}>
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
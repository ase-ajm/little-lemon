import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AutoSlider.css";
import oss from "../images/ossobucco.jpg";
import enigar from "../images/enginar.jpg";
import rissoto from "../images/rissotoFunghi.jpg";




const specialties = [
  {
    id: 1,
    name: "Ossobuco",
    description: "Slow-braised veal shanks with gremolata",
    image: oss
  },
  {
    id: 2,
    name: "Risotto ai Funghi",
    description: "Creamy risotto with wild mushrooms",
    image: rissoto
  },
  {
    id: 3,
    name: "Enigar",
    description: "Stuffed artichokes with rice, pine nuts, and herbs",
    image: enigar
  },
];

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Today's Specialties</h2>
      <Slider {...settings}>
        {specialties.map((item) => (
          <div key={item.id} className="slide-item">
            <div className="slide-image-container">
              <img 
                src={item.image} 
                alt={item.name}
                className="slide-image"
              />
            </div>
            <h3 className="dish-name">{item.name}</h3>
            <p className="dish-description">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
);
};

export default AutoSlider;
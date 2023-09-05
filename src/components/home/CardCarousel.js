import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cardData from "../../data/cardData.json"; // Adjusted import path

const CardCarousel = () => {
  return (
    <Carousel>
      {cardData.cards.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={item.image}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardCarousel;

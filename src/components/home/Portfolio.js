//Voor deze pagina heb ik OpenAI en voor zo ver mogelijk eigen inzicht gebruikt. Na het implementeren van de Array kreeg ik het niet voor
//elkaar om de API random img te laten generen.. ook met AI lukt dit niet altijd vgm..

import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Portfolio = () => {
  // Generate random dummy image URLs
  const generateRandomImageURLs = () => {
    const imageCount = 10; // Number of images to generate
    const imageWidth = 400; // Width of the images
    const imageHeight = 300; // Height of the images

    const imageURLs = [];
    for (let i = 1; i <= imageCount; i++) {
      const imageURL = `https://source.unsplash.com/random/${imageWidth}x${imageHeight}/?project${i}`;
      imageURLs.push(imageURL);
    }
    return imageURLs;
  };

  const imageUrls = generateRandomImageURLs();

  return (
    <section id="portfolio">
      <hr />
      <h2>Portfolio</h2>
      <Row>
        {imageUrls.map((imageUrl, index) => (
          <Col key={index} sm={4}>
            <Card>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>Project {index + 1}</Card.Title>
                <Card.Text>
                  Een voorbeeldproject met een korte beschrijving.
                </Card.Text>
                <Button variant="primary" href="#">
                  Meer informatie
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Portfolio;

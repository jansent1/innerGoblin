import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { useParams } from "react-router-dom";

const GoblinIllustrator = () => {
  // const { illustratorId } = useParams(); // parameter voor illustrator ID

  // Simuleer illustratordata
  const illustratorData = {
    id: 1,
    name: "Goblin Artist",
    description:
      "Meet the talented goblin artist behind these whimsical and imaginative illustrations...",
    imagePath: `img/oni-gal.jpg`,
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <img
            src={illustratorData.imagePath}
            alt={illustratorData.name}
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>{illustratorData.name}</h2>
          <p>{illustratorData.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GoblinIllustrator;

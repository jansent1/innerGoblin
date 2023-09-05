import React from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";

const IntroCarousel = () => {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <section>
          <Row>
            <Col sm={2}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O47QeWbJ73MU5d2cWap98MV4ewX3iUx6_g&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    Een voorbeeldproject met een korte beschrijving.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2x6RwO5xh-Xq853CkEznG4lRZnGN9MxYMQ&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>
                    Een ander voorbeeldproject met een korte beschrijving.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Voeg hier meer projectkaarten toe */}
            <Col sm={2}>
              <Card className="active">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIm_oFiNANCahnp7pBVFKsn_6FjaV2hxBFcg&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    Een voorbeeldproject met een korte beschrijving.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVJCtOXKgknwPwcaVPgtDJUQ-irQutS7S0w&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>
                    Een ander voorbeeldproject met een korte beschrijving.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/4f/80/57/4f8057f0e75dff31cfabd12ab0740d4a.jpg"
                />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    Een voorbeeldproject met een korte beschrijving.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUrWrVZe7SrIs5kD4sHyXIc_8e9THYneJEA&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>
                    Een ander voorbeeldproject met een korte beschrijving.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Voeg hier meer projectkaarten toe */}
          </Row>
        </section>
      </Carousel.Item>
    </Carousel>
  );
};

export default IntroCarousel;

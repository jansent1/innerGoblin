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
                <Card.Img variant="top" src="img/fox-cop.jpg" />
                <Card.Body>
                  <Card.Title>Fox Cop</Card.Title>
                  <Card.Text>
                    Fox-Cop, de verleidelijke goblin, betreedt de duisternis met
                    een sluwe glimlach en verleidelijke blik in haar ogen.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img variant="top" src="img/Seadragon-gal.jpg" />
                <Card.Body>
                  <Card.Title>Sea Dragon</Card.Title>
                  <Card.Text>
                    SeaDragon Girl betovert onder de diepe zee met haar
                    gracieuze verschijning, een oceaanprinses wier staart
                    schittert als kostbare schelpen.
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
                <Card.Img variant="top" src="img/gob-monk.jpg" />
                <Card.Body>
                  <Card.Title>Ds Gob</Card.Title>
                  <Card.Text>
                    In de serene stilte van de kloosterzalen mediteert Gob Monk
                    met een rustige geest, een meester in de goblinkunst van
                    innerlijke balans en vrede.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img variant="top" src="img/burner-gob.jpg" />
                <Card.Body>
                  <Card.Title>Burned</Card.Title>
                  <Card.Text>
                    Met een meedogenloze blik omarmt Burner-Gob het
                    vernietigende vuur van haar enorme kanon, gereed om chaos te
                    veroorzaken in het heetst van de strijd.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img variant="top" src="img/orc-milf.jpg" />
                <Card.Body>
                  <Card.Title>Orc Mama</Card.Title>
                  <Card.Text>
                    In het goblinrijk straalt een sexy geklede goblinmoeder als
                    een verleidelijke ster, haar gewaagde outfit trekt
                    bewonderende blikken.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Meer informatie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Card>
                <Card.Img variant="top" src="img/Eh.jpg" />
                <Card.Body>
                  <Card.Title>Ehh..</Card.Title>
                  <Card.Text>
                    In het goblinrijk valt een tiener op met haar grote paarse
                    kuif en verwarde blik. Haar onhandige charme en
                    eigenzinnigheid maken haar een intrigerende verschijning.
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

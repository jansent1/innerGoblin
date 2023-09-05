import React from "react";
import { Container } from "react-bootstrap";
import "./ParallaxComponent.css"; // Create this CSS file for custom styles

const ParallaxComponent = () => {
  return (
    <div>
      {/* Parallax section */}
      <div className="parallax jumbotron">
        <Container>
          <h1>Inner Goblin</h1>
        </Container>
      </div>

      {/* Content section */}
      <div className="content">
        <Container>
          <h2>About Inner Goblin</h2>
          <p>
            Inner Goblin is een creatief bedrijf dat zich specialiseert in het
            tot leven brengen van de verborgen goblins in ons dagelijks leven.
            Met een unieke mix van kunst en verbeeldingskracht, creëert Inner
            Goblin prachtige illustraties die deze ondeugende wezens in al hun
            glorie vastleggen. Ontdek de betoverende wereld van Inner Goblin en
            laat je meeslepen door de magie van goblins in de meest onverwachte
            situaties.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default ParallaxComponent;

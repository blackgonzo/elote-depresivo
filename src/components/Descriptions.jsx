import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Description.css";

function Descriptions() {
  const [text, setText] = useState(
    "Elija una de las opciones. Si busca algo más específico, puede consultarnos en (Información) arriba."
  );

  const handleSelect = (selectedKey) => {
    switch (selectedKey) {
      case "#pixel":
        setText(
          "diseños pixel art, como animaciones, sprites para videojuejos y uvmaps.   "
        );

        break;
      case "#vector":
        setText(
          "Diseño en vectores logos , fondos , templates, overlays, animations y mas  "
        );
        break;
      case "#blender":
        setText(
          "se hacen modelados, Rigin, uvmaps animaciones y modelos para videojuegos   "
        );
        break;

      default:
        setText("elija la opcion que desee.");
    }
  };

  return (
    <Card style={{height: '80%', width: '50%', margin: '4px'}}>
      <Card.Header style={{ backgroundColor: "black" }}>
        <Nav
          variant="tabs"
          defaultActiveKey="#pixel"
          onSelect={handleSelect}
          className="flex-column"
        >
          <Nav.Item style={{ backgroundColor: "black" }}>
            <Nav.Link eventKey="#pixel">Pixel Art</Nav.Link>
          </Nav.Item>
          <br />

          <Nav.Item style={{ backgroundColor: "black" }}>
            <Nav.Link eventKey="#vector">Vector</Nav.Link>
          </Nav.Item>
          <br />

          <Nav.Item style={{ backgroundColor: "black" }}>
            <Nav.Link eventKey="#blender">Blender</Nav.Link>
          </Nav.Item>
          <br />

          <br />
        </Nav>
      </Card.Header>
      <Card.Body
        style={{ backgroundColor: "black", border: "solid 2px #ffffff" }}
      >
        <Card.Text style={{ color: " #ffffff" }}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Descriptions;

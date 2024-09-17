import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function ContactInformation() {
  return (
    <Card style={{ color: "#ffffff", backgroundColor: "#black" }}>

      <Nav.Item style={{ color: "#ffffff", backgroundColor: "black", padding: '3px' }}>
        <Nav.Link href="https://www.facebook.com/profile.php?id=61551377602904&sk=about">
          Facebook
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ color: "#ffffff", backgroundColor: "black", padding: '3px' }}>
        <Nav.Link href="https://www.instagram.com/elote_depresivo?igsh=MTBvYjczNW41eTNpMQ==">
          Instagram
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ color: "#ffffff", backgroundColor: "black", padding: '3px' }}>
        <Nav.Link href="https://www.instagram.com/elote_depresivo?igsh=MTBvYjczNW41eTNpMQ==">
          Twitter
        </Nav.Link>
      </Nav.Item>
    </Card>
  );
}

export default ContactInformation;

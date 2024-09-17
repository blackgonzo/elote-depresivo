import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


function Administracion() {
  const navigate =useNavigate()

  function cerrar_sesion(){
    localStorage.removeItem('Authentication')
    navigate('/');
  }
  return (
    <>
      <Navbar />
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Paquete Premium</Card.Title>
                <Card.Text>
                 se venden aguacate papalla piña sebolla pepino webo buen webo un webotototote bien grande como de avestruz 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div>
        <button onClick={cerrar_sesion}>Salir</button>
      </div>
    </>
  );
}

export default Administracion;

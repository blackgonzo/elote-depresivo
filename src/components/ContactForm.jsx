import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
    <div style={{ border: '5px solid #ffffff' }}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ingrese el correo</Form.Label>
          <Form.Control type="email" placeholder="correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>agregue consulta</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default ContactForm;

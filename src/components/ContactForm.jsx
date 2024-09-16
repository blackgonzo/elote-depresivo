import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
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
  );
}

export default ContactForm;

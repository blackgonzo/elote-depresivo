import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

    const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // Estado para mensajes de éxito o error

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm( "service_kx1nl9i", "template_8trmbbk", event.target,'t-BajrlsJqkxt0eFS', form.current).then(
      () => {
        setStatus("Envio Exitoso");
        form.current.reset(); // Limpiar el formulario después de enviar
      },
      (error) => {
        setStatus("No se envio.");
        console.error("FAILED...", error.text);
      }
    );
  };

  return (
    <div >
      <form ref={form} onSubmit={sendEmail}>
        <label style={{color: '#ffffff'}}  htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" required />

        <label htmlFor="user_email" style={{color: '#ffffff'}} >Email</label>
        <input type="email" name="user_email" id="user_email" required />

        <label htmlFor="message" style={{color: '#ffffff'}}>Message</label>
        <textarea name="message" id="message" required />

        <input type="submit" value="Send" />
      </form>
      {status && <p style={{color: '#ffffff'}}>{status}</p>} {/* Mostrar mensaje de estado */}
    </div>
  );
};
export default ContactUs;
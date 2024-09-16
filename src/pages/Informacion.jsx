import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MapDiv from "../components/MapDiv";
import "./Informacion.css";
import ContactForm from "../components/ContactForm";

const Informacion = () => {
  return (
    <>
      <div><Navbar /></div>
      <div className="cuerpo">
        <div className="info_negocio">
        <h1 className="titulo_info">BIENVENIDOS</h1>
        <p className="parrafo_info">
          esta pagina se dedica a ofrecer servicios de diseño dentro de los
          cuales estan animaciones, renderizados, logos vectoriales entre otros.
          <br />
          se manejan diferentes tipos de arte ademas tambien se da servicio de
          sprites, uvMaps, efectos, y efectos de sonido c:.
        </p>
        </div>
        <div className="cuerpito"><MapDiv /></div>
        <div className="form_contacto"><ContactForm/></div>
      </div>
    </>
  );
};

export default Informacion;

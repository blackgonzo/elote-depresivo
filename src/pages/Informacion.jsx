import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MapDiv from "../components/MapDiv";
import "./Informacion.css";
import ContactUs from "../components/ContactForm";
import ContactInformation from "../components/ContactInformation";

const Informacion = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="cuerpo">
        <div className="info_negocio">
          <h1 className="titulo_info">BIENVENIDOS</h1>

          <p className="parrafo_info">
            esta pagina se dedica a ofrecer servicios de diseño dentro de los
            cuales estan animaciones, renderizados, logos vectoriales entre
            otros. Se manejan diferentes tipos de arte ademas tambien se da
            servicio de sprites, uvMaps, efectos, y efectos de sonido.
          </p>
        </div>

        <div className="cuerpito">
          <MapDiv />
          <div className="form">
            <h3>Constac Us</h3>
            <ContactUs />
          </div>
          <div className="info">
            <ContactInformation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Informacion;

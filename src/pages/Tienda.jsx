import Navbar from "../components/Navbar";
import React from "react";
import Descriptions from "../components/Descriptions";

import "./Tienda.css";

const Tienda = () => {
  return (
    <>
      <Navbar />
      <div className="cuerpo">
        <div className="primera_sec">

          <div className="categorias">
            <Descriptions />
          </div>
        </div>

        <div className="segunda_sec">
       
        </div>

        <div className="tercera_sec">
    
        </div>

      </div>
    </>
  );
};

export default Tienda;

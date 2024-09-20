import Navbar from "../components/Navbar";
import React from "react";
import Descriptions from "../components/Descriptions";
import ProductsSection from "../components/ProductsSection";
import ProductsCar from "../components/ProductsCar";
import "./Tienda.css";

const Tienda = () => {
  return (
    <>
      <Navbar />
      <div className="cuerpo_tienda">
        <div className="tienda_primera_sec">
          <Descriptions />

          <ProductsCar />
        </div>

        <div className="tienda_segunda_sec">
          <ProductsSection />
        </div>

        <div className="tienda_tercera_sec"></div>
      </div>
    </>
  );
};

export default Tienda;

import React from 'react';
import './ProductsCar.css'; 

const ProductsCar = () => {
  return (
    <div className="carrito_container">
      <h1>Contenido Desplazable</h1>
      {Array.from({ length: 20 }, (_, index) => (
        <p key={index}>Elemento {index + 1}</p>
      ))}
    </div>
  );
};

export default ProductsCar;

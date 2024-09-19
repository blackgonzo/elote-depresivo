import React from 'react';
import './ProductsSection.css'; // Asegúrate de tener este archivo para los estilos

const ProductsSection = () => {
  return (
    <div className="productos_container">
      <h2>Contenido Desplazable Horizontal</h2>
      {Array.from({ length: 10 }, (_, index) => (
        <div className="item" key={index}>
          Elemento {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;

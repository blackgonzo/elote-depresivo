import React from 'react';
import './ProductsSection.css'; // Asegúrate de tener este archivo para los estilos
import {getProducts} from "../services/ServicesCar/GetProduct";
import { useState } from 'react';

const ProductsSection = () => {
  
  const [productos, setProductos] = useState([]);
  const [message_productos, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProduct();
        setProductos(response); // Asumiendo que la respuesta es un array de productos
      } catch (error) {
        setMessage("Error connecting to the server");
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="scrollable_productos">
      <h2>Contenido Desplazable Horizontal</h2>
      {Array.from({ length: 10 }, (_, index) => (
        <div className="card_producto" key={index}>
          Elemento {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;

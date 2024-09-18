// src/components/RegisterPage.js
import React, { useState } from "react";
import { registerUser } from "../services/ServicesLogin/Post";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const ProductCreator = () => {
  const [name_product, set_name_product] = useState("");
  const [description_product, set_description_product] = useState("");
  const [size_product, set_size_product] = useState("");
  const [price_product, set_price_product] = useState("");
  const [image_product, set_image_product] = useState("");
  
  const [message, set_Message] = useState("");
  const Navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const result = await registerUser(
        name_product,
        description_product,
        price_product,
        size_product
      );
      setMessage("Producto Agregado con exito");
    } catch (error) {
      setMessage("Error agregando el producto");
    }
  };

  return (
    <>
      <div className="cuadro_registro">
        <h2>Agregar Producto</h2>

        <form onSubmit={handleRegister}>
          <div>
            <br />
            <label>
              name_product:
              <input
                type="text"
                value={name_product}
                onChange={(e) => set_name_product(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <br />
            <label>
              Descripcion del producto:
              <input
                type="text"
                value={description_product}
                onChange={(e) => set_description_product(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <br />
            <label>
              Tamaño del canvas
              <input
                type="text"
                value={size_product}
                onChange={(e) => set_size_product(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <br />
            <label>
              Precio del producto:
              <input
                type="numbre"
                value={price_product}
                step="0.01" 
                min="0"    
                onChange={(e) =>  set_price_product(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Imagen del producto
              <input
                type="image"
                value={image_product}
                onChange={(e) => set_image_product(e.target.value)}
                required
              />
            </label>
          </div>

          <button type="submit">Register</button>

          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
};

export default ProductCreator;

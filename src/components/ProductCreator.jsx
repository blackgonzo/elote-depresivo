// src/components/RegisterPage.js
import React, { useState } from "react";
import { registerUser } from "../services/ServicesLogin/Post"; // Ensure this is the correct import
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // If not used, consider removing
import { RegisterProduct } from "../services/ServicesCar/PostProduct";

const ProductCreator = () => {
  const [name_product, set_name_product] = useState("");
  const [description_product, set_description_product] = useState("");
  const [size_product, set_size_product] = useState("");
  const [price_product, set_price_product] = useState("");
  const [image, set_image] = useState("");
  const [message, set_message] = useState("");
  const navigate = useNavigate();

  const convert2base64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      set_image(reader.result.toString());
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await RegisterProduct(
        name_product,
        description_product,
        price_product,
        size_product,
        image // Pass the image
      );
      
      set_message("Producto Agregado con éxito");
   
    } catch (error) {
      set_message("Error agregando el producto");
    }
  };

  return (
    <div className="cuadro_registro" style={{ color: 'white' }}>
      <h2>Agregar Producto</h2>

      <form onSubmit={handleRegister}>
        <div>
          <br />
          <label>
            Nombre del producto
            <input
              type="text"
              value={name_product}
              onChange={(event) => set_name_product(event.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <br />
          <label>
            Descripción del producto:
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
              type="number"
              value={price_product}
              step="0.01"
              min="0"
              onChange={(e) => set_price_product(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="fotillo">
          <label>Imagen del producto</label>
          {image ? (
            <img src={image} alt="Product Preview" />
          ) : (
            <div>
              <input
                id="fileupload"
                className="hidden"
                type="file"
                onChange={convert2base64}
                accept="image/*" // Optional: restrict file types
              />
              <label htmlFor="fileupload" style={{ cursor: 'pointer' }}>
                Subir Archivo
              </label>
            </div>
          )}
        </div>

        <button type="submit">Agregar Producto</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ProductCreator;

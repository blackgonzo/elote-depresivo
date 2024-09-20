// src/components/RegisterPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="boostrap_product_creator" style={{ width: "50%" }}>
      <h3>Agregar Producto</h3>

      <form onSubmit={handleRegister}>
        <div>
          <br />

          <input
            placeholder="Nombre"
            type="text"
            value={name_product}
            onChange={(event) => set_name_product(event.target.value)}
            required
          />
        </div>

        <div>
          <br />

          <input
            placeholder="Descripcion"
            type="text"
            value={description_product}
            onChange={(e) => set_description_product(e.target.value)}
            required
          />
        </div>

        <div>
          <br />

          <input
            placeholder="Imagen"
            type="text"
            value={size_product}
            onChange={(e) => set_size_product(e.target.value)}
            required
          />
        </div>

        <div>
          <br />

          <input
            placeholder="precio"
            type="number"
            value={price_product}
            step="0.01"
            min="0"
            onChange={(e) => set_price_product(e.target.value)}
            required
          />
        </div>
        <br />

        <div className="fotillo">
          {image ? (
            <img
              className="product-image"
              src={image}
              alt="Product Preview"
              style={{ height: "100%", width: "200px", objectFit: "cover" }}
            />
          ) : (
            <div
              className="espacio_imagen"
              style={{
                height: "120px",
                width: "325px",
                border: "solid 2px white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="imagen_producto">inserte imagen</label>
              <input
                id="fileupload"
                className="hidden"
                type="file"
                onChange={convert2base64}
                accept="image/*" // Optional: restrict file types
              />
            </div>
          )}
        </div>
        <br />
        <button type="submit">Agregar Producto</button>
        <br />
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ProductCreator;

// MapDiv.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Crear un componente funcional para el mapa
const MapDiv = () => {
  // Coordenadas iniciales del mapa y nivel de zoom
  const position = [10.0866232, -84.7273769]; // Cambia las coordenadas según tu necesidad
  const zoom = 15; // Ajusta el nivel de zoom

  return (
    <div style={{ border: '5px solid #ffffff' }}>
      <h2 style={{ color: "white" }}>Ubicacion</h2>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "200px", width: "70%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapDiv;

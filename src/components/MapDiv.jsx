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
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ border: 'solid 2px #ffffff', padding: '5px', height: "100%", width: "30%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default MapDiv;

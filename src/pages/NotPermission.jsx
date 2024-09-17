import React, { useState } from "react";
import Navbar from "../components/Navbar"
import '../pages/NotPermission.css'

const NotPermission = () => {
  return (
    <>
      <Navbar />
      <div className="cuerpo">
        <div className="denegar">
          <h1>Hola no tienes permiso para entrar aqui .l.</h1>
        </div>
      </div>
    </>
  );
};
export default NotPermission;

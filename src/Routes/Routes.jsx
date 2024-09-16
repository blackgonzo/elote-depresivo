import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; 
import RegisterPage from '../pages/RegisterPage'; 
import LoginPage from '../pages/LoginPage'; 
import Paquetes from '../pages/Paquetes';
import Informacion from '../pages/Informacion';
import ProtectedRoute from '../ProtectedRoute';


function Routing() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/paquetes" element={<ProtectedRoute><Paquetes /></ProtectedRoute>}/>
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
  );
}

export default Routing;

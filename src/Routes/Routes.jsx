import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; 
import RegisterPage from '../pages/RegisterPage'; 
import LoginAdminPage from '../pages/LoginAdminPage'; 
import Informacion from '../pages/Informacion';
import ProtectedRoute from '../ProtectedRoute';
import Administracion from '../pages/Adminitracion';
import NotPermission from '../pages/NotPermission'
import Tienda from '../pages/Tienda';

function Routing() {

  return (
    //basename='/elote-depresivo/'
    <Router >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/notpermission" element={<NotPermission />} />
        <Route path="/loginadminpage" element={<LoginAdminPage />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/administracion" element={<ProtectedRoute><Administracion /></ProtectedRoute>}/>
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
  );
}

export default Routing;

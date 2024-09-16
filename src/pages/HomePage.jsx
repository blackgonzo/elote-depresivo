// src/components/HomePage.js

import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "./HomePage.css";

const HomePage = () => {
  return (
      <div className="home_page">
        <Navbar />
      </div>
  );
};

export default HomePage;

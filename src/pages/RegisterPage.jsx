// src/components/RegisterPage.js
import React, { useState } from "react";
import { registerUser } from "../services/ServicesLogin/Post";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const result = await registerUser(username, password);
      setMessage("User registered successfully");
      Navigate("/");
    } catch (error) {
      setMessage("Error registering user");
    }
  };

  return (
    <>
  
      <Navbar />
      <br />
      <div className="cuerpo">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default RegisterPage;

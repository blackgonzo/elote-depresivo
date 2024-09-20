import { useNavigate } from "react-router-dom";
import ProductCreator from "../components/ProductCreator";
import Navbar from "../components/Navbar";
import "../pages/Administracion.css";

function Administracion() {
  const navigate = useNavigate();

  function cerrar_sesion() {
    localStorage.removeItem("Authentication");
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="cuerpo_admin">


        <div className="contenedor_formulario_creador">

          <ProductCreator />
         

        </div>

        <div className="boton_de_salida"> <button onClick={cerrar_sesion}>Cerrar Sesion</button></div>
        
      </div> 
     
    </>
  );
}

export default Administracion;

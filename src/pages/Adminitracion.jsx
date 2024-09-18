import { useNavigate } from "react-router-dom";
import ProductCreator from "../components/ProductCreator";

function Administracion() {
  const navigate = useNavigate();

  function cerrar_sesion() {
    localStorage.removeItem("Authentication");
    navigate("/");
  }
  return (
    <>
      <div className="cuerpo">
        <div className="generador"></div>
        <div>
          <ProductCreator />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Administracion;

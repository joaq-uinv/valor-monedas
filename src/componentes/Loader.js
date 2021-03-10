import React, { useEffect } from "react";
import Gif from "../imgs/loader.gif";

const Loader = () => {
  useEffect(() => {
    window.alert(
      "Deshabilitada la posibilidad de calcular el tipo de cambio hasta que se arregle el error de CORS en la API de Free Currency Converter."
    );
  }, []);

  return (
    <div className="loader">
      <img src={Gif} alt="loader" />
    </div>
  );
};

export default Loader;

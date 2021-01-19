import React from "react";
import ReactDOM from "react-dom";

const InfoFisicas = ({ abrirInfo, opcionesMonedas, nombresMonedas }) => {
  if (!abrirInfo) return null;

  return ReactDOM.createPortal(
    <>
      <section className="container-modal" />
      <section className="contenido-modal">
        <div className="simbolos">
          <h4>Símbolos</h4>
          <div className="">
            {/* al loopear esto me meot en un loop infinito */}
            {/* {opcionesMonedas.map((opcion) => (
              <p>{opcion}</p>
            ))} */}
          </div>
        </div>
        <div className="nombres">
          <h4>Nombres</h4>
          <div className="">
            {/* {nombresMonedas.map((nombre) => (
              <p>{nombre}</p>
            ))} */}
          </div>
        </div>
      </section>
    </>,
    document.querySelector("#modal")
  );
};

export default InfoFisicas;

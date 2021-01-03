import React from "react";

const HamburguesaCriptos = ({ toggleMenu }) => {
  return (
    <button className="btn-hamburguesa-criptos" onClick={toggleMenu}>
      <div className="linea-hamburguesa" />
      <div className="linea-hamburguesa" />
      <div className="linea-hamburguesa" />
    </button>
  );
};

export default HamburguesaCriptos;

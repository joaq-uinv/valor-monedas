import React from "react";

const HamburguesaFisicas = ({ toggleMenu }) => {
  return (
    <button className="btn-hamburguesa-fisicas" onClick={toggleMenu}>
      <div className="linea-hamburguesa" />
      <div className="linea-hamburguesa" />
      <div className="linea-hamburguesa" />
    </button>
  );
};

export default HamburguesaFisicas;

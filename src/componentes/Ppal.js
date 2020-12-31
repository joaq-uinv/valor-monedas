import React from "react";
import { Link } from "react-scroll";

const Ppal = () => {
  return (
    <div className="container-btns" id="ppal">
      <Link
        to="fisicas"
        spy={true}
        smooth={true}
        duration={500}
        className="link"
      >
        <button className="btn-fiscas">Chequeá el tipo de cambio</button>
      </Link>
      <Link
        to="criptos"
        spy={true}
        smooth={true}
        duration={500}
        className="link"
      >
        <button className="btn-criptos">
          Fijate estadistícas de criptomonedas
        </button>
      </Link>
    </div>
  );
};

export default Ppal;

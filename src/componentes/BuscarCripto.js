import React from "react";
import { animateScroll as scroll } from "react-scroll";

const BuscarCripto = ({ onChange }) => {
  const irHome = () => {
    scroll.scrollToTop();
  };

  return (
    <form className="form-cripto" id="criptos">
      <button onClick={irHome} className="btn-home-criptos">
        <i class="fas fa-arrow-up fa-3x"></i>
      </button>
      <input
        type="text"
        placeholder="Buscar"
        className="input-cripto"
        onChange={onChange}
      />
    </form>
  );
};

export default BuscarCripto;

import React from "react";

const BuscarCripto = ({ onChange }) => {
  return (
    <form className="form-cripto" id="criptos">
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

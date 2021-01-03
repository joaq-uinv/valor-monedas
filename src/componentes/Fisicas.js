import { React, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import HamburguesaFisicas from "./HamburguesaFisicas";

const Fisicas = ({
  opcionesMonedas,
  monedaInicial,
  monedaFinal,
  tipoCambio,
  setTipoCambio,
  setMonedaInicial,
  setMonedaFinal,
  API_KEY,
  estaConvirtiendo,
  setEstaConvirtiendo,
}) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const convertirMoneda = async (primeraMoneda, segundaMoneda) => {
    try {
      setEstaConvirtiendo(true);
      const res = await fetch(
        `https://free.currconv.com/api/v7/convert?q=${primeraMoneda}_${segundaMoneda}&compact=ultra&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setTipoCambio(Object.values(data));
      setEstaConvirtiendo(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const irHome = () => {
    scroll.scrollToTop();
    setMenuAbierto(!menuAbierto);
  };

  const irCriptos = () => {
    scroll.scrollMore(651);
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="container-fisicas" id="fisicas">
      <section className="menu">
        <HamburguesaFisicas toggleMenu={toggleMenu} />
        <button
          onClick={irHome}
          className={
            menuAbierto
              ? "btn-home-fisicas-abierto"
              : "btn-home-fisicas-cerrado"
          }
        >
          <i class="fas fa-arrow-up fa-3x"></i>
        </button>
        <button
          onClick={irCriptos}
          className={menuAbierto ? "btn-abajo-abierto" : "btn-abajo-cerrado"}
        >
          <i class="fas fa-arrow-down fa-3x"></i>
        </button>
      </section>

      <select
        name="primera"
        onChange={(e) => setMonedaInicial(e.target.value)}
        required
      >
        {opcionesMonedas.map((opcion) => (
          <option value={opcion} key={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      <span style={{ margin: "0 1rem" }}>a</span>
      <select
        name="segunda"
        onChange={(e) => setMonedaFinal(e.target.value)}
        required
      >
        {opcionesMonedas.map((opcion) => (
          <option value={opcion} key={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="btn-convertir"
        onClick={() => {
          convertirMoneda(monedaInicial, monedaFinal);
        }}
      >
        Convertir
      </button>
      <span>
        {estaConvirtiendo ? "Convirtiendo" : Number(tipoCambio).toFixed(2)}
      </span>
    </div>
  );
};

export default Fisicas;

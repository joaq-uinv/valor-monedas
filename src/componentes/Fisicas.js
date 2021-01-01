import { React } from "react";
import Hamburguesa from "./Hamburguesa";
import { animateScroll as scroll } from "react-scroll";

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

  const irHome = () => {
    scroll.scrollToTop();
  };

  const irCriptos = () => {
    scroll.scrollMore(651);
  };

  return (
    <div className="container-fisicas" id="fisicas">
      <button onClick={irHome} className="btn-home-fisicas">
        <i class="fas fa-arrow-up fa-3x"></i>
      </button>
      <section className="container-selects">
        <select
          name="opcion-primera"
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
      </section>
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
      <button onClick={irCriptos} className="btn-abajo">
        <i class="fas fa-arrow-down fa-3x"></i>
      </button>
    </div>
  );
};

export default Fisicas;

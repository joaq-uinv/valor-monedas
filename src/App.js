import { useState, useEffect } from "react";
import "./App.css";
//componentes
import Loader from "./componentes/Loader";
// import Ppal from "./componentes/Ppal";
// import Fisicas from "./componentes/Fisicas";
import TablaCriptos from "./componentes/TablaCriptos";

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;

  const [estaCargando, setEstaCargando] = useState(false);
  // const [opcionesMonedas, setOpcionesMonedas] = useState([]);
  // const [estaConvirtiendo, setEstaConvirtiendo] = useState(false);
  // const [monedaInicial, setMonedaInicial] = useState();
  // const [monedaFinal, setMonedaFinal] = useState();
  // const [tipoCambio, setTipoCambio] = useState([]);
  const [criptos, setCriptos] = useState([]);
  const [busquedaCriptos, setBusquedaCriptos] = useState("");

  useEffect(() => {
    // const traerMoneda = async () => {
    //   try {
    //     setEstaCargando(true);
    //     const res = await fetch(
    //       `https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`
    //     );
    //     const { results } = await res.json();
    //     setOpcionesMonedas([...Object.keys(results)]);
    //     setEstaCargando(false);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    const traerCripto = async () => {
      try {
        setEstaCargando(true);
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
        );
        const data = await res.json();
        setCriptos(data);
        setEstaCargando(false);
      } catch (err) {
        console.log(err);
      }
    };

    // traerMoneda();
    traerCripto();
  }, []);

  const onChange = (e) => {
    setBusquedaCriptos(e.target.value);
  };

  const criptosFiltradas = criptos.filter((cripto) =>
    cripto.name.toLowerCase().includes(busquedaCriptos.toLowerCase())
  );

  return (
    <>
      {estaCargando ? (
        <Loader />
      ) : (
        <>
          {/* <Ppal />
          <Fisicas
            opcionesMonedas={opcionesMonedas}
            monedaInicial={monedaInicial}
            monedaFinal={monedaFinal}
            tipoCambio={tipoCambio}
            setTipoCambio={setTipoCambio}
            setMonedaInicial={setMonedaInicial}
            setMonedaFinal={setMonedaFinal}
            API_KEY={API_KEY}
            estaConvirtiendo={estaConvirtiendo}
            setEstaConvirtiendo={setEstaConvirtiendo}
          /> */}
          <TablaCriptos
            onChange={onChange}
            criptosFiltradas={criptosFiltradas}
          />
        </>
      )}
    </>
  );
}

export default App;

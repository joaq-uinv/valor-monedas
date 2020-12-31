import { React } from "react";
import BuscarCripto from "./BuscarCripto";

const TablaCriptos = ({ onChange, criptosFiltradas }) => {
  const encabezados = [
    "Moneda",
    "Precio (USD)",
    "Volumen",
    "Variación del Precio en 24hs (USD)",
    "Variación del Precio en 24hs (%)",
  ];

  return (
    <>
      <BuscarCripto onChange={onChange} />
      <table className="tabla-criptos">
        <thead>
          <tr className="encabezados">
            {encabezados.map((encabezado) => (
              <th>{encabezado}</th>
            ))}
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {criptosFiltradas.map((cripto) => (
            <tr>
              {
                <>
                  <section className="nombre-cripto">
                    <td className="cripto">
                      <h1>{cripto.name}</h1>
                      <img src={cripto.image} alt="cripto" />
                      <p className="simbolo-cripto">{cripto.symbol}</p>
                    </td>
                  </section>
                  <td nombre="Precio (USD)">
                    {cripto.current_price.toLocaleString()}
                  </td>
                  <td nombre="Volumen">
                    {cripto.total_volume.toLocaleString()}
                  </td>
                  <td nombre="Variación del Precio en 24hs (USD)">
                    {cripto.price_change_24h >= 0 ? (
                      <p className="cambio-precio positivo">
                        {parseFloat(cripto.price_change_24h).toFixed(2)}
                      </p>
                    ) : (
                      <p className="cambio-precio negativo">
                        {parseFloat(cripto.price_change_24h).toFixed(2)}
                      </p>
                    )}
                  </td>
                  <td nombre="Variación del precio en 24hs (%)">
                    {cripto.price_change_percentage_24h >= 0 ? (
                      <p className="cambio-precio-porcentaje positivo">
                        {parseFloat(cripto.price_change_percentage_24h).toFixed(
                          2
                        )}
                      </p>
                    ) : (
                      <p className="cambio-precio-porcentaje negativo">
                        {parseFloat(cripto.price_change_percentage_24h).toFixed(
                          2
                        )}
                      </p>
                    )}
                  </td>
                </>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaCriptos;

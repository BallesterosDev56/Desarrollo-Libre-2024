import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "./analitics.css";
import { useState, useEffect } from "react";
import { fetchStonks } from "../../../logic/fetchStonks/fetchStonks";
import { joinEventSuccess } from "../../../helpers/alerts/Alerts";

Chart.register(ArcElement, Tooltip, Legend);

export const Analitics = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [datos, setDatos] = useState([15, 15, 15, 15, 15]);
  const [loading, setLoading] = useState(false);
  const months = {
    Enero: "Enero",
    Febrero: "Febrero",
    Marzo: "Marzo",
    Abril: "Abril",
    Mayo: "Mayo",
    Junio: "Junio",
    Julio: "Julio",
    Agosto: "Agosto",
    Septiembre: "Septiembre",
    Octubre: "Octubre",
    Noviembre: "Noviembre",
    Diciembre: "Diciembre",
  };

  const data = {
    labels: ["Antioquia", "Cundinamarca", "Valle", "Caldas", "Quindio"],
    datasets: [
      {
        label: "Dinero Recaudado (COP)",
        data: datos,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const handleRegionChange = (event) => {
    setDatos([1530500, 1115400, 1214000, 1460500, 1089500]);
    const region = event.target.value;
    setSelectedRegion(region);
    let ganacias = [];
    fetchStonks(region).then((response) => {
      console.log(response);
      response.forEach((region) => {
        ganacias.push(region.totalRegional);
      });
      setDatos([...ganacias]);
      console.log(data.datasets[0].data);
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container d-flex flex-column shadow-lg rounded-4 pb-4 bg--soft--blue my-3">
      <h2 className="text-center display-4 m-4 mt-2">Elige el mes de tu interés</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <select
              id="regionSelector"
              className="form-select form-select-md mb-3 shadow-sm"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">Selecciona un mes</option>
              {Object.keys(months).map((regionKey) => (
                <option key={regionKey} value={regionKey}>
                  {months[regionKey]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : datos[1] !== 15 ? (
            <>
              <div className="grafico card shadow-sm m-auto p-4 mb-5 bg-body rounded">
                <h3 className="text-center">Análisis de Recaudación</h3>
                <Pie data={data} className="pie" />
              </div>
            </>
          ) : (
            <>
              <div className="grafico card shadow-sm m-auto p-4 mb-5 bg-body rounded">
                <h3 className="text-center">Análisis de Recaudación</h3>
                <Pie data={data} className="pie" />
              </div>
              <textarea
                name=""
                id="prompt"
                className="form-control mb-3"
                placeholder="Escribe tu pronóstico aquí"
              ></textarea>
              <button className="btn btn-primary w-100">
                Analizar Pronóstico con IA
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

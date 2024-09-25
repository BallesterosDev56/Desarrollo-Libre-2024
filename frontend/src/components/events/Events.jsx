import { useState, useEffect } from "react";
import { fetchEvents } from "../../logic/fetchEvents/FetchEvents";

export const Events = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const regions = {
    atlantico: "Atlántico",
    valle: "Valle",
    antioquia: "Antioquia",
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    // console.log(region);

    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 1500);
    fetchEvents(region).then((response)=> {
        console.log(response);
        
        setEvents(response)
    })
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center display-3 my-5">Eventos que pueden ser de tu interés</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <select
              id="regionSelector"
              className="form-select"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">Selecciona una región</option>
              {Object.keys(regions).map((regionKey) => (
                <option key={regionKey} value={regionKey}>
                  {regions[regionKey]}
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
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : events.length > 0 ? (
            <div className="card">
              <div className="card-header">
                <h4>Eventos disponibles en {regions[selectedRegion]}</h4>
              </div>
              <ul className="list-group list-group-flush">
                {events.map((event, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{event.name}</strong> <br />
                    Fecha: {event.date} <br />
                    Ubicación: {event.location}
                  </li>
                ))}
              </ul>
            </div>
          ) : selectedRegion && !loading ? (
            <div className="alert alert- text-center">
              Parece que no hay eventos disponibles para {regions[selectedRegion]}.
            </div>
          ) : (
            <div className="alert alert-warning text-center">
              Por favor selecciona una regional.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
import { useState, useEffect } from "react";
import { fetchEvents } from "../../logic/fetchEvents/FetchEvents";
import { joinEventSuccess } from "../../helpers/alerts/Alerts";

export const Events = ({regional}) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [events, setEvents] = useState([]);
  
  useEffect(()=> {
    console.log(regional);
    
    fetchEvents(regional).then((enventos)=> {
        if (Array.isArray(enventos.result)) {
            setEvents(prev=> [...prev, ...enventos.result]);
        } else {
            console.log(enventos);
        }
        
    })

}, [])

  const handleClick = () =>{
    Swal.fire(joinEventSuccess);
  }
  return (
    <div className="container mt-5">
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          {events[0] ? (
            <div className="card">
              <div className="px-4">
                <h2 className="text-center display-5 my-5">Eventos que pueden ser de tu interés</h2>
              </div>
                <div className="row justify-content-center">
                  <ul className="list-group list-group-flush p-2">
                    {events.map((event, index) => (
                      <li key={index} className="list-group-item ms-5">
                        <strong>{event.name}</strong> <br />
                        Fecha: {event.fecha} <br />
                        Ubicación: {event.location} <br />
                        <button onClick={handleClick} className="btn btn-success btn-md my-2">Inscribirme</button>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          ) : (
            <div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
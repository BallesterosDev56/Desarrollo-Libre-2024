import { useNavigate } from "react-router-dom";
import './regionales.css'; 
import imageBg from '../../assets/lady-bike-w.jpg'
import { MapViewPoints } from "../mapView/Mapview";

export const Regionales = () => {
    const navigate = useNavigate();

    // Función para manejar los clics de los botones
    const handleRegionClick = (region) => {
        navigate(`/home/${region}`);
    };

    const regions = [
        { name: "Cundinamarca" },
        { name: "Valle" },
        { name: "Antioquia" },
        { name: "Caldas" },
        { name: "Atlantico" }
    ];

    return (
        <main className="col-12 d-flex justify-content-between align-items-center regionales-container">
            {/* Columna izquierda con el texto y botones */}
            <div className="left-column col-8 text-white text-center ">
                <h2 className="text-shadow text-white fw-bold display-4 px-2 mt-5">Selecciona tu regional más cercana...</h2>
                <div className="regionales--container d-flex justify-content-center mb-3 px-5">
                    {regions.map((region, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleRegionClick(region.name)} 
                            className="btn btn-primary m-3 p-3 shadow-lg rounded-4 transition-button"
                        >
                            {region.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Columna derecha con el mapa */}
            <MapViewPoints></MapViewPoints>
            
        </main>
    );
};

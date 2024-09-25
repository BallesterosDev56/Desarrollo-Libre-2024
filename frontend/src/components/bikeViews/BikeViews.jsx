import { useNavigate } from "react-router-dom";
import './bikeViews.css'; 
import imageBg from '../../assets/lady-bike-w.jpg'
import { AdminMap } from "../adminMap/AdminMap";

export const BikeViews = () => {
    const navigate = useNavigate();

    // Función para manejar el click
    const handleOnClick = () => {
        navigate(`/admin_home/`);
    };

    return (
        <main className="col-12 d-flex justify-content-between align-items-start regionales-container">
            {/* Columna izquierda con el texto y botones */}
            <div className="left-column col-8 text-white text-start px-5">
                <h2 className="text-shadow text-white fw-bold display-4 mt-5">Ten control de tus bicicletas en tiempo real</h2>
                <p className="fs-5 mt-4 ">Podrás acceder a la ubicación de cada una de las bicicletas rentadas por los Aprendices.</p>
            </div>

            {/* Columna derecha con el mapa */}
            <AdminMap></AdminMap>
            
        </main>
    );
};

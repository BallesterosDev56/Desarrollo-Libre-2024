import './adminEvents.css'; 
import imageBg from '../../assets/path-bg.jpg'
import { useNavigate } from 'react-router-dom';

export const AdminEvents = () => {
    const navigate = useNavigate();

    const handleOnClick = ()=> {
        navigate('/admin_home/create_event');
    }

    return (
        <main className="col-12 d-flex justify-content-between align-items-center introduction--container ">
            {/* Columna izquierda con el texto y botones */}
            <div className="col-5 left-column text-white text-start p-4 mt-5">
                <h2 className="text-shadow text-black fw-bold display-5 mb-4">Crea eventos de ciclorutas en tu regional</h2>
                <div className="d-flex flex-column align-items-start my-5">
                    <p className='text-secondary fs-5'>Puedes crear eventos para promover el uso de bicicletas, y así incrementas tus ventas y ayudas al medio ambiente.</p>
                    <button onClick={handleOnClick} className='btn btn-primary mt-3 p-3 shadow-lg rounded-4 transition-button fs-5'>Crear eventos</button>
                </div>
            </div>

            {/* Columna derecha con la imagen */}
            <div className="right-column d-flex  col-6">
                <img 
                    src={imageBg} 
                    alt="Regional" 
                    className="img-fluid"
                />
            </div>

        </main>
    );
};

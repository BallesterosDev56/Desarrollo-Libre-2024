import './adminIntroduction.css'; 
import imageBg from '../../assets/analisis.png'
import { useNavigate } from 'react-router-dom';

export const AdminIntroduction = () => {
    const navigate = useNavigate();

    const handleOnClick = ()=> {
        navigate('/admin_home/events');
    }

    return (
        <main className="col-12 d-flex justify-content-between align-items-center introduction--container ">
            {/* Columna derecha con la imagen */}
            <div className="right-column d-flex  col-6">
                <img 
                    src={imageBg} 
                    alt="Regional" 
                    className="regional-image"
                />
            </div>
            
            {/* Columna izquierda con el texto y botones */}
            <div className="col-6 left-column text-white text-end p-4 mt-5">
                <h2 className="text-shadow text-black fw-bold display-5 mb-4">Ten el control de tus ventas mes con mes</h2>
                <div className="d-flex flex-column align-items-end my-5">
                    <p className='text-secondary fs-5'>Con ECOSENA no tienes que preocuparte por llevar tus cuentas mensuales, nosotros lo hacemos por ti.</p>
                    <button onClick={handleOnClick} className='btn btn-primary mt-5 p-3 shadow-lg rounded-4 transition-button fs-5'>Continuar</button>
                </div>
            </div>

        </main>
    );
};

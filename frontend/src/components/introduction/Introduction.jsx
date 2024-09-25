import './introduction.css'; 
import imageBg from '../../assets/lady-bike-w.jpg'

export const Introduction = () => {

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
            <div className="col-6 left-column text-white text-center p-4">
                <h2 className="text-shadow text-black fw-bold display-5 mb-4">Alquila Bicicletas y Cuida del Medio Ambiente</h2>
                <div className="d-flex flex-column align-items-center">
                    <p className='text-secondary fs-4'>Únete a la revolución verde y muévete de forma sostenible con EcoSena.</p>
                </div>
            </div>

        </main>
    );
};

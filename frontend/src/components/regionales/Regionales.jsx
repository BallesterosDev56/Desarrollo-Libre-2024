import { useNavigate } from "react-router-dom";


export const Regionales = ()=> {
    
    const navigate = useNavigate();

        //Manejo de cada uno de los botones:

    //antioquia:
    const handleAntioquiaClick = ()=> {
        let regional = 'Antioquia'
        navigate(`/home/${regional}`);
    }
    //valle:
    const handleValleClick = ()=> {
        let regional = 'Valle'
        navigate(`/home/${regional}`);
    }
    //Caldas:
    const handleCaldasClick = ()=> {
        let regional = 'Caldas'
        navigate(`/home/${regional}`);
    }
    //antioquia:
    const handleAtlanticoClick = ()=> {
        let regional = 'Atlantico'
        navigate(`/home/${regional}`);
    }
    //antioquia:
    const handleCundinamarcaClick = ()=> {
        let regional = 'Cundinamarca'
        navigate(`/home/${regional}`);
    }

    return(
        <main>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 bg-success py-4">
                    <h2 className="fs-1 text-center mb-5">Selecciona tu regional más cercana...</h2>
                    <div className="regionales--container col-8">
                        <button onClick={handleCundinamarcaClick} className='btn btn-primary m-3'>Cundinamarca</button>
                        <button onClick={handleValleClick} className='btn btn-primary m-3'>Valle del cauca</button>
                        <button onClick={handleAntioquiaClick} className='btn btn-primary m-3'>Antioquia</button>
                        <button onClick={handleCaldasClick} className='btn btn-primary m-3'>Caldas</button>
                        <button onClick={handleAtlanticoClick} className='btn btn-primary m-3'>Atlántico</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
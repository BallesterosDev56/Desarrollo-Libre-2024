import './home.css'
import { useEffect, useState } from "react"
import { verifyLog } from "../../../logic/verifyLog/verifyLog"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Home = ()=> {
    const [renderAuth, setRenderAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        let verifiedUser = verifyLog();

        if (verifiedUser) {
            setRenderAuth(true);
        }
    }, [])

    //Manejo de cada uno de los botones:

    //antioquia:
    const handleAntioquiaClick = ()=> {
        let regional = 'antioquia'
        navigate(`/home/${regional}`);
    }

    return(
        <section>
            {
                // si el usuario NO ESTÁ autenticado se va a rederizar esto:
                !renderAuth ?
                <>
                    <header className="container-fluid d-flex justify-content-end shadow-lg py-4">
                        <div className="login--container">
                            <Link className="text-decoration-none fs-4 mx-3" to={'/login'}>Iniciar sesión</Link>
                        </div>
                        <div className="register--container">
                            <Link className="text-decoration-none fs-4 mx-3" to={'/register'}>Regístrate</Link>
                        </div>
                    </header>
                    <main>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 bg-success py-4">
                                    <h2 className="fs-1 text-center mb-5">Selecciona tu regional más cercana...</h2>
                                    <div className="regionales--container col-8">
                                        <button className='btn btn-primary m-3'>Cundinamarca</button>
                                        <button className='btn btn-primary m-3'>Valle del cauca</button>
                                        <button onClick={handleAntioquiaClick} className='btn btn-primary m-3'>Antioquia</button>
                                        <button className='btn btn-primary m-3'>Caldas</button>
                                        <button className='btn btn-primary m-3'>Atlántico</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </>
                
                
                :


                // si el usuario ESTÁ autenticado se va a rederizar esto:
                <>
                    <header className="container-fluid d-flex justify-content-end shadow-lg py-4 px-5">
                        <div className="user-icon">
                            <i className="fa-user fa-solid fa-2xl"></i>
                        </div>
                    </header>
                    <main>
                        <h1>autenticado</h1>
                    </main>
                </>
            }

        </section>
    )
}
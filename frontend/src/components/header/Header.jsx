import { Link } from "react-router-dom"

export const Header = ()=> {
    return(
        <header className="container-fluid d-flex justify-content-end shadow-lg py-4">
        <div className="login--container">
            <Link className="text-decoration-none fs-4 mx-3" to={'/login'}>Iniciar sesión</Link>
        </div>
        <div className="register--container">
            <Link className="text-decoration-none fs-4 mx-3" to={'/register'}>Regístrate</Link>
        </div>
    </header>
    )
}
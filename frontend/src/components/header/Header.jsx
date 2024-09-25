import { Link } from "react-router-dom"
import logo from '../../assets/ECOSENA_ONLY.png'
import title from '../../assets/title.png'

export const Header = ()=> {
    return (
        <header>
          <nav className="bg--custom navbar navbar-expand-lg navbar-light px-3 shadow">
            <div className="container-fluid">
              {/* Logo y Titulo */}
              <a className="navbar-brand d-flex align-items-center" href="/home">
                <img 
                  src={logo} 
                  alt="Logo" 
                  width="100"
                  className="d-inline-block align-text-top mx-3" 
                />
                <img 
                  src={title} 
                  alt="title" 
                  width="200"
                  className="d-inline-block" 
                />
                
              </a>
    
              {/* Botón para moviles */}
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
    
              {/* Navbar */}
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link fs-4" href="/login">Inicia Sesión</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-4" href="/register">Regístrate</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
}
import { Link } from "react-router-dom"
import logo from '../../assets/ECOSENA_ONLY.png'
import title from '../../assets/title.png'

export const AuthHeader = ()=> {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light shadow bg-light px-3">
            <div className="container-fluid"    >
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
                    <i className="fa-solid fa-user fa-2xl mx-5"></i>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
}
import logo from '../../assets/ECOSENA_ONLY.png'
import title from '../../assets/title.png'
import { useEffect, useState } from "react"

export const AuthHeader = ()=> {
    const [isUser, setIsUser] = useState(true);

    useEffect(()=> {
      let isAdmin = sessionStorage.getItem('adminState');
      if (isAdmin === 'false') {
        setIsUser(false);
      } else if (isAdmin === 'true') {
        setIsUser(true);
      }

    }, [])

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
                  <li className="nav-item d-flex flex-row align-items-center">
                    {isUser? <p className="mt-3 fw-bold fs-4">Usuario</p> : <p className="mt-3 fw-bold fs-4">Admin</p>}
                    <i className="fa-solid fa-user fa-2xl mx-4"></i>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
}
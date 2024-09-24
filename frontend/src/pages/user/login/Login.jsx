import './login.css'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { fetchLogin } from '../../../logic/fetchLogin/FetchLogin'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../auth/authUser/AuthUser'
import { useEffect, useState } from 'react'

export const Login = ()=> {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {login} = useAuth();
    const [render, setRender] = useState(null);

    //creamos la funcion que maneja los datos del formulario:
    const onSubmit = (data)=> {
        console.log(data);
        //creamos el objeto con los datos del usuario
        const userData = {
            userEmail : data.userEmail,
            userPassword : data.userPassword,
        }

        //hacemos el fetch al inicio de sesión del usuario:
        fetchLogin(userData).then((response)=> {
            if (response.success) {
                // if (response.userType == 'Admin') {
                //     console.log(response);
                // }
                login();
                setRender(true);

            } else {
                console.log(response.error);
                
            }
            
        }).catch((err)=> {
            console.log(err);
            
        })
        //reset();
        
    }

    //comprobamos el cambio de estado:
    useEffect(()=> {
        if (render) {
            navigate('/home');
        }

    }, [render])

    return(
        <section className="login--section">
            <div className="container d-flex align-items-center justify-content-center min-vh-100">
                <div className="card shadow-lg p-4" style={{width: '28rem'}}>
                <div className="card-body">
                    <h2 id="formTitle" className="card-title text-center mb-4 fs-1">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
                    <div className="mb-3">
                        <label htmlFor="emailLogin" className="form-label fw-bold">Correo electrónico</label>
                        <input {...register('userEmail')} type="email" className="form-control" id="emailLogin" placeholder="Ingresa tu correo electrónico" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordLogin" className="form-label fw-bold">Contraseña</label>
                        <input {...register('userPassword')} type="password" className="form-control" id="passwordLogin" placeholder="Ingresa tu contraseña" required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
                    <div className="text-center mt-3">
                        <small>¿No tienes cuenta? 
                        <Link to={'/register'} className="text-decoration-none mx-2">Regístrate aquí</Link>
                        </small>
                    </div>
                    </form>


                </div>
                </div>
            </div>
        </section>
    )
}
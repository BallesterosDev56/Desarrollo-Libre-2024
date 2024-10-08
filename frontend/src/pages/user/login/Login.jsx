import './login.css'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { fetchLogin } from '../../../logic/fetchLogin/FetchLogin'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../auth/authUser/AuthUser'
import { useEffect, useState } from 'react'
import { useAdmin } from '../../../auth/authAdmin/AuthAdmin'

export const Login = ()=> {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const {isAdmin, isNotAdmin} = useAdmin();
    const navigate = useNavigate();
    const {login} = useAuth();
    const [render, setRender] = useState(null);

    //creamos la funcion que maneja los datos del formulario:
    const onSubmit = (data)=> {
        //creamos el objeto con los datos del usuario
        const userData = {
            userEmail : data.userEmail,
            userPassword : data.userPassword,
        }
        

        //hacemos el fetch al inicio de sesión del usuario:
        fetchLogin(userData).then((response)=> {
            
            if (response.success) {
                if (response.result.tipo == 'Admin') {
                    isAdmin();
                    navigate('/admin_home');
                }
                
                sessionStorage.setItem('userData', response.result.user_id);
                sessionStorage.setItem('userEstrato', response.result.estrato);
                login();
                isNotAdmin();
                setRender(true);

            } else {
                console.log(response.message);
                Swal.fire({
                    icon: "error",
                    title: `${response.message}`,
                });
                
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
            <div className="container d-flex align-items-center justify-content-end min-vh-100">
                <div className="card shadow-lg p-4" style={{width: '28rem'}}>
                <div className="card-body">
                    <h2 id="formTitle" className="card-title text-center mb-4 fs-3">Inicia sesión en ECO SENA</h2>

                    <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
                    <div className="mb-3">
                        <label htmlFor="emailLogin" className="form-label fw-bold">Correo electrónico</label>
                        <input {...register('userEmail')} type="email" className="form-control" id="emailLogin" placeholder="Ingresa tu correo electrónico" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordLogin" className="form-label fw-bold">Contraseña</label>
                        <input {...register('userPassword', {
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/,
                            message: 'La constraseña requiere un caracter especial *'
                        },
                        minLength: 6,
                        maxLength: 20
                    })} type="password" className="form-control" id="passwordLogin" placeholder="Ingresa tu contraseña" minLength={6} maxLength={20} required/>
                    </div>
                    {errors.userPassword && <p className="fs-6 text-danger mt-2">{errors.userPassword.message}</p>}
                    <button type="submit" className="btn btn-success w-100 mt-3">Login</button>
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
import './register.css'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { fetchRegister } from '../../../logic/fetchRegister/FetchRegister'

export const Register = ()=> {
    
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    //creamos la funcion que maneja los datos del formulario:
    const onSubmit = (data)=> {
        if (data.userPassword === data.repeatUserPassword) {
            console.log(data);
            
            //creamos el objeto con los datos del usuario
            const userData = {
                userName : data.userName,
                userDocument : data.userDocument,
                userEstrato : data.userEstrato,
                userEmail : data.userEmail,
                userPassword : data.userPassword,
            }

            //hacemos el fetch al registro de usuario:
            fetchRegister(userData);

            //reset();
        }
        
    }

    return(
        <section className="register--section">
            <div className="container d-flex align-items-center justify-content-center py-4 min-vh-100">
                <div className="card shadow-lg px-4 col-7">
                <div className="card-body">
                    <h2 id="formTitle" className="card-title text-center mb-4 fs-1">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)} id="registerForm">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label fw-bold">Nombre completo *</label>
                        <input {...register('username')} type="text" className="form-control" id="username" placeholder="Ingresa tu nombre de usuario" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cedula" className="form-label fw-bold">Cédula *</label>
                        <input {...register('userDocument')} type="text" className="form-control" id="cedula" placeholder="Ingresa tu cédula" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailRegister" className="form-label fw-bold">Correo Electrónico *</label>
                        <input {...register('userEmail')} type="email" className="form-control" id="emailRegister" placeholder="Ingresa tu email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estrato" className="form-label fw-bold">Estrato *</label>
                        <input {...register('userEstrato')} type="number" className="form-control" id="estrato" placeholder="Ingresa tu estrato socioeconómico" min={1} max={6} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordRegister" className="form-label fw-bold">Contraseña *</label>
                        <input {...register('userPassword')} type="password" className="form-control" id="passwordRegister" placeholder="Crea una contraseña" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repeatPassword" className="form-label fw-bold">Repetir Contraseña *</label>
                        <input {...register('repeatUserPassword')} type="password" className="form-control" id="repeatPassword" placeholder="Repite la contraseña" required/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label fw-lighter" htmlFor="flexCheckDefault">
                            Acepto los terminos y condiciones
                        </label>
                        <input className="form-check-input" type="checkbox" value=""/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-4">Registrarse</button>
                    <div className="text-center mt-3">
                        <small>¿Ya tienes cuenta? 
                            <Link to={'/login'} className="text-decoration-none mx-2">Inicia sesión aquí</Link>
                        </small>
                    </div>
                    </form>

                </div>
                </div>
            </div>
        </section>
    )
}
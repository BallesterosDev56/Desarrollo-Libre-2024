import './brands.css'
import ibmLogo from '../../assets/ibm.png'
import senaLogo from '../../assets/logoSena.png'
import ecosenaLogo from '../../assets/ECOSENA_LOGO.png'
import plazaLogo from '../../assets/zona.png'


export const Brands = ()=> {
    return(
        <section className='brands--container col-12 d-flex justify-content-evenly '>
            <img className='ibm-logo' src={ibmLogo} alt="logo" />
            <img className='logo' src={senaLogo} alt="logo" />
            <img className='logo' src={ecosenaLogo} alt="logo" />
            <img className='zona-logo' src={plazaLogo} alt="logo" />
        </section>
    )
}
import './home.css'
import { useEffect, useState } from "react"
import { verifyLog } from "../../../logic/verifyLog/verifyLog"
import { AuthHeader } from '../../../components/header/AuthHeader';
import { Header } from '../../../components/header/Header';
import { Regionales } from '../../../components/regionales/Regionales';
import { Slogan } from '../../../components/slogan/Slogan';
import { Footer } from '../../../components/footer/Footer';
import { Introduction } from '../../../components/introduction/Introduction';
import { Brands } from '../../../components/brands/Brands';

export const Home = ()=> {
    const [renderAuth, setRenderAuth] = useState(false);

    useEffect(()=> {
        let verifiedUser = verifyLog();

        if (verifiedUser) {
            setRenderAuth(true);
        }
    }, [])


    return(
        <section>
            {
                // si el usuario NO ESTÁ autenticado se va a rederizar esto:
                !renderAuth ?
                <>
                    <Header></Header>
                    <Regionales></Regionales>
                    <Introduction></Introduction>
                    <Slogan></Slogan>
                    <Brands></Brands>
                    <Footer></Footer>
                </>
                
                
                :


                // si el usuario ESTÁ autenticado se va a rederizar esto:
                <>
                    <AuthHeader></AuthHeader>
                    <Regionales></Regionales>
                    <Introduction></Introduction>
                    <Slogan></Slogan>
                    <Brands></Brands>
                    <Footer></Footer>
                </>
            }

        </section>
    )
}
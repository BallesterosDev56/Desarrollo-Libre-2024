import './home.css'
import { useEffect, useState } from "react"
import { verifyLog } from "../../../logic/verifyLog/verifyLog"
import { AuthHeader } from '../../../components/header/AuthHeader';
import { Header } from '../../../components/header/Header';
import { Regionales } from '../../../components/regionales/Regionales';

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
                </>
                
                
                :


                // si el usuario ESTÁ autenticado se va a rederizar esto:
                <>
                    <AuthHeader></AuthHeader>
                    <Regionales></Regionales>
                </>
            }

        </section>
    )
}
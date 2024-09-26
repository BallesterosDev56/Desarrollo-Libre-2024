import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Header } from "../../../components/header/Header";
import { verifyLog } from "../../../logic/verifyLog/verifyLog";
import { AuthHeader } from "../../../components/header/AuthHeader";
import { BikeList } from "../../../components/bikeList/BikeList";
import { Events } from "../../../components/events/Events";


export const Regional = ()=> {
    
    const [renderAuth, setRenderAuth] = useState(false);
    const {regional} = useParams();
    
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
                    <BikeList regional={regional}></BikeList>
                    <Events regional={regional}></Events>
                    
                </>
                
                
                :


                // si el usuario ESTÁ autenticado se va a rederizar esto:
                <>
                    <AuthHeader></AuthHeader>
                    <BikeList regional={regional}></BikeList>
                    <Events regional={regional}></Events>
                    
                </>
            }
        </section>
    )
}
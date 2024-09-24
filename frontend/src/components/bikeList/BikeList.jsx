import { useEffect } from "react";
import { fetchBikes } from "../../logic/fetchBikes/FetchBikes";

export const BikeList = ({regional})=> {

    useEffect(()=> {
        fetchBikes(regional).then((bikes)=> {
            console.log(bikes);
            
        })

    }, [])
    
    return(
        <section>
            <h2>bikelist</h2>
        </section>
    )
}
import { useEffect } from "react";
import { fetchBikes } from "../../logic/fetchBikes/FetchBikes";
import { BikeCard } from "../bikeCard/BikeCard";

export const BikeList = ({regional})=> {

    useEffect(()=> {
        fetchBikes(regional).then((bikes)=> {
            console.log(bikes.result);
            
        })

    }, [])
    
    return(
        <section>
            <BikeCard 
            ></BikeCard>
        </section>
    )
}
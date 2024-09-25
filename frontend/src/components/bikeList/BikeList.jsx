import { useEffect, useState } from "react";
import { fetchBikes } from "../../logic/fetchBikes/FetchBikes";
import { BikeCard } from "../bikeCard/BikeCard";
import './bikeList.css'

export const BikeList = ({regional})=> {
    const [bikes, setBikes] = useState([]);

    useEffect(()=> {
        fetchBikes(regional).then((bikes)=> {
            if (Array.isArray(bikes)) {
                setBikes(prev=> [...prev, ...bikes.result]);
                
            } else {
                console.log(bikes);
                
            }
            
        })

    }, [])
    
    return(
        <section id="cards--container">
            {
                bikes.map((element, index)=> {
                    return <BikeCard key={index} marca={element.marca} imagen={element.url_img} id={element.bike_id} regional={regional}></BikeCard>
                })
            }
        </section>
    )
}
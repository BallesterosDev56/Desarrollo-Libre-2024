import { useEffect, useState } from "react";
import { fetchBikes } from "../../logic/fetchBikes/FetchBikes";
import { BikeCard } from "../bikeCard/BikeCard";
import './bikeList.css'

export const BikeList = ({regional})=> {
    const [bikes, setBikes] = useState([]);

    useEffect(()=> {
        fetchBikes(regional).then((bikes)=> {
            if (Array.isArray(bikes.result)) {
                setBikes(prev=> [...prev, ...bikes.result]);
                
            } else {
                console.log(bikes);
                
            }
            
        })

    }, [])
    
    return(
        <>
            {
                bikes.length > 0?
                (
                    <>
                        <div className="title">
                            <h2 className="text-center display-3 my-5">Descubre nuestras bicicletas disponibles</h2>
                        </div>
                        <section id="cards--container">
                            {
                                bikes.map((element, index)=> {
                                    return <BikeCard key={index} marca={element.marca} imagen={element.url_img} id={element.bike_id} regional={regional}></BikeCard>
                                })
                            }
                        </section>
                    </>
                ) : (
                    <>
                        <h2 className="display-4 text-center fw-bold">OPPS... :(</h2>
                        <h2 className="display-4 text-center fw-bold">Parece que no hay bicicletas disponible para esta regional</h2>
                    </>
                )
            }
        
        </>
    )
}
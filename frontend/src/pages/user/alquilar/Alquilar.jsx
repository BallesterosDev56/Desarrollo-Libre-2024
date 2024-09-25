import { useParams } from "react-router-dom"


export const Alquilar = ()=> {
    const {bike_id} = useParams();
    

    return( 
        <>
            <h1>alquilar </h1>
            <h2>{bike_id}</h2>
        </>
    )
}
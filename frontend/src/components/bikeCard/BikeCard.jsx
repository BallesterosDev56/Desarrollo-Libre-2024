import './bikeCard.css'

export const BikeCard = ({imagen, regional})=> {

    return (
        <>
            <div className="card-container">
                <img className='image-card' src={imagen} alt="image-card" />
                <div className="flex-block">
                    <p><span className='soft-text'>({10})·{regional}</span></p>
                </div>
                <div className="description">
                    <p>description</p>
                </div>
                <div className="button--container">
                    <button className='btn btn-success'>Alquilar</button>
                </div>
            </div>
        </>
    )
}
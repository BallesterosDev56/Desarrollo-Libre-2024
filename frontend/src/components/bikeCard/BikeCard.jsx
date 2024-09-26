import { useNavigate } from "react-router-dom";
import './bikeCard.css'


export const BikeCard = ({ marca, imagen, id, regional}) => {

  const navigate = useNavigate();
  const state = 'Disponible'

  const handleOnClick = ()=> {
      navigate(`/home/${regional}/${id}`);
  }

  return (
    <div
      className="card shadow-md col-3 hover--div"
      style={{backgroundColor: "#f5f5f5", border: "none" }}
    >
      <div className="card-badge bg-warning">{state}</div>
      <img
        src={imagen}
        className="card-img-top my"
        alt={`Bicicleta ${marca}`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5
          className="card-title fs-3"
          style={{ color: "#0f5132"}}
        >
          {marca}
        </h5>
        <button
        onClick={handleOnClick}
          className="bg--sena btn btn-primary my-3"
        >
          Alquilar
        </button>
      </div>
    </div>
  );
};


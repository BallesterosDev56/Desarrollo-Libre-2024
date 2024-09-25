import { useNavigate } from "react-router-dom";


export const BikeCard = ({ marca, imagen, id, regional}) => {

  const navigate = useNavigate();

  const handleOnClick = ()=> {
      navigate(`/home/${regional}/${id}`);
  }

  return (
    <div
      className="card shadow-sm col-3 "
      style={{backgroundColor: "#f5f5f5", border: "none" }}
    >
      <img
        src={imagen}
        className="card-img-top"
        alt={`Bicicleta ${marca}`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5
          className="card-title"
          style={{ color: "#0f5132", fontWeight: "bold" }}
        >
          {marca}
        </h5>
        <button
        onClick={handleOnClick}
          className="btn btn-primary my-3"
          style={{ backgroundColor: "#198754", borderColor: "#198754" }}
        >
          Alquilar
        </button>
      </div>
    </div>
  );
};


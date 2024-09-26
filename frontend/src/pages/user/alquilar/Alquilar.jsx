import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { differenceInDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";

export const Alquilar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [estrato, setEstrato] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bike, setBike] = useState(null);
  const { bike_id } = useParams();
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  //hacemos el get para traer una cicla por el id:
  useEffect(() => {
    async function getBikeData() {
      try {
        const response = await fetch(`http://localhost:3000/bike/${bike_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la bicicleta");
        }
        const data = await response.json();
        setBike(data.result); // Guarda los datos de la bicicleta en el estado
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    getBikeData();
  }, []);

  //hacemos el post para crear la renta
  useEffect(() => {
    let userID = sessionStorage.getItem("userData");
    let userEstrato = sessionStorage.getItem("userEstrato");
    if (userID == null) {
      setUserId("holi");
    } else {
      setUserId(userID);
      setEstrato(userEstrato);
    }

    async function sendBikeData() {
      try {
        let region = bike.regional;

        const info = {
          userId: userId, //id usuario
          bikeId: bike_id,
          price: totalCost,
          regional: region,
        };
        const response = await fetch(`http://localhost:3000/bike`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        });
        let data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
    sendBikeData();
  }, [totalCost]);

  // Función para calcular el número de días entre dos fechas
  const calculateTotalDays = (start, end) => {
    if (start && end) {
      const days = differenceInDays(end, start);
      return days >= 0 ? days + 1 : 0; // Añadir 1 para incluir ambos días
    }
    return 0;
  };
  const handleOnClick = () => {
    if (userId === "holi") {
      navigate("/login");
    } else {
      setTotalCost(calculateTotalDays(startDate, endDate) * bike.precio_d);
      sessionStorage.setItem("costo", (calculateTotalDays(startDate, endDate) * bike.precio_d) * 0.95)
      console.log("hola");
      navigate("/pagar");
    }
  };

  return (
    <>
      {bike ? (
        <section className="event--section d-flex justify-content-center align-items-center">
          <div className="col-5 bg-white shadow-lg rounded-4 px-5 py-3 d-flex justify-content-center align-items-center my-5 bg-light">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 d-flex align-items-center">
                <img className="bike--image img-fluid rounded" src={bike.url_img} alt="bike" />
              </div>
              <div className="col-md-6">
                <h2 className="text-success display-6 fw-bold">{bike.marca}</h2>
                <p className="text-secondary">{bike.descripcion}</p>
                <div className="mb-3">
                  <label className="form-label fs-5">Fecha de inicio:</label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="form-control"
                    placeholderText="Selecciona una fecha de inicio"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-5">Fecha de fin:</label>
                  <br />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="form-control"
                    placeholderText="Selecciona una fecha de fin"
                  />
                </div>
                {startDate && endDate ? (
                  <>
                    <p>
                      <strong>Días totales:</strong>{" "}
                      {calculateTotalDays(startDate, endDate)}
                    </p>
                    <p>
                      <strong>Costo total:</strong> $
                      {(calculateTotalDays(startDate, endDate) * bike.precio_d) * 0.95}
                    </p>
                  </>
                ) : (
                  <p></p>
                )}
                <button className="btn btn-success" onClick={handleOnClick}>
                  Alquilar
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

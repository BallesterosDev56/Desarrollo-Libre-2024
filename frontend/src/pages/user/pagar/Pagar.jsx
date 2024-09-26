import { useNavigate } from "react-router-dom";
import "./pagar.css";
import { paymentSuccess } from "../../../helpers/alerts/Alerts";
import { useState } from "react";
export const Pagar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let total = sessionStorage.getItem("costo")
    e.preventDefault();
    Swal.fire( {
        icon: "success",
        title: "¡Perfecto!",
        text: `Se ha realizado el pago exitosamente con un valor de $${total}`
    });
    navigate("/home");
  };

  return (
    <section className="pagar--section d-flex justify-content-center align-items-center">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <h2>Formulario de Pago</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="cardHolderName" className="form-label">
                      Nombre del Titular
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardHolderName"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      placeholder="1234 5678 9101 1121"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="expiryDate" className="form-label">
                        Fecha de Expiración
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        placeholder="MM/AA"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="cvv"
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="billingAddress" className="form-label">
                      Dirección de Facturación
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="billingAddress"
                      placeholder="Calle Principal 1234"
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-block">
                      Pagar Ahora
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

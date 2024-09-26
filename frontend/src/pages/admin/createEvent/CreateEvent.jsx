import { useForm } from "react-hook-form";
import './createEvent.css'
import { fetchCreateEvents } from "../../../logic/fetchEvents/FetchEvents";
import { useNavigate } from "react-router-dom";
import { createEventSuccess } from "../../../helpers/alerts/Alerts";
export const CreateEvent = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data)=> {
        fetchCreateEvents(data).then((response)=> {
          if (response.success) {
              Swal.fire(createEventSuccess)
              navigate("/admin_home")
          } else {
              console.log(response.message);

          }

      }).catch((err)=> {
          console.log(err);

      })
    }

  return (
    <section className="event--section d-flex justify-content-center align-items-center">
      <div className="container-fluid d-flex justify-content-end mt-5">

        <div className="row justify-content-center">
        <h2 className="text-center text-white mb-4 display-5 fw-bold">Crea un nuevo evento</h2>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body shadow-lg p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre del Evento
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Ciclovía Atlántico 2024"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Fecha del evento
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      className="form-control"
                      id="date"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Lugar del evento
                    </label>
                    <input
                      {...register('location')}
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Parque Metropolitano, Atlántico"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="region" className="form-label">
                      Selecciona la regional
                    </label>
                    <select
                      {...register('regional')}
                      id="region"
                      className="form-select"
                      required
                    >
                      <option value="">Selecciona una regional</option>
                      <option value="Quindio">Quindio</option>
                      <option value="Valle">Valle</option>
                      <option value="Antioquia">Antioquia</option>
                      <option value="Cundinamarca">Cundinamarca</option>
                      <option value="Atlantico">Atlantico</option>
                    </select>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-block mt-3">
                      Crear evento
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

export default CreateEvent;
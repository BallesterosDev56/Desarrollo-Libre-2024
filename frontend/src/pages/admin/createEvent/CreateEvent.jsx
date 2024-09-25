import { useForm } from "react-hook-form";

export const CreateEvent = () => {  

    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data)=> {
        console.log(data);
        
    }

  return (
    <div className="container-fluid d-flex justify-content-end mt-5">

      <div className="row justify-content-center">
      <h2 className="text-center mb-4 display-4">Crea un nuevo evento</h2>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body shadow-lg p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre del Evento
                  </label>
                  <input
                    {...register('nombreEvento')}
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
                    {...register('fechaEvento')}
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
                    {...register('lugarEvento')}
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
                    {...register('regionalEvento')}
                    id="region"
                    className="form-select"
                    required
                  >
                    <option value="">Selecciona una regional</option>
                    <option value="atlantico">Atlántico</option>
                    <option value="valle">Valle</option>
                    <option value="antioquia">Antioquia</option>
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
  );
};

export default CreateEvent;

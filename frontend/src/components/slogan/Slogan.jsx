import './slogan.css'

export const Slogan = () => {
  return (
    <>
      <section class="services py-5">
        <div class="container text-center">
          <h2 className='text--sena fs-2'>Nuestros Servicios</h2>
          <p className="mb-5">
            Ofrecemos alquiler de bicicletas, tours ecológicos y estaciones en
            tu regional SENA.
          </p>
          <div class="row">
            <div class="col-md-4">
              <h3 className='text--sena fs-2'>Alquiler por Día</h3>
              <p>Alquila una bicicleta por día y explora la ciudad.</p>
            </div>
            <div class="col-md-4">
              <h3 className='text--sena fs-2'>Ciclorutas</h3>
              <p>Descubre cuales ciclorutas hay abilitadas en tu sector.</p>
            </div>
            <div class="col-md-4">
              <h3 className='text--sena fs-2'>Las mejores Bicicletas</h3>
              <p>
                Tienes acceso a bicicletas en buen estado para que puedas disfrutar de ellas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

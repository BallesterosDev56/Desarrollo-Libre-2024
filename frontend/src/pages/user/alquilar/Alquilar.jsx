import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { differenceInDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import {useParams} from 'react-router-dom'

export const Alquilar = ()=> {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalDays, setTotalDays] = useState(0)
    const [cost, setCost] = useState(0)
    const [bike, setBike] = useState(null)
    const costPerDay = 50; // Ejemplo de costo por día en USD
    const {bike_id} = useParams();
    const [userId, setUserId] = useState(null);

    let userID = sessionStorage.getItem('userData');
    setUserId(userID);
    
    //hacemos el get para traer una cicla por el id:
    useEffect(() => {
        async function getBikeData() {
          try {
            const response = await fetch(`http://localhost:3000/bike/${bike_id}`, {
              method: 'GET', 
              headers: {
                'Content-Type': 'application/json',
              }
            });
            if (!response.ok) {
              throw new Error('Error al obtener los datos de la bicicleta');
            }
            const data = await response.json();
            setBike(data); // Guarda los datos de la bicicleta en el estado
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        }
        
        getBikeData();

      }, [id]);

      //hacemos el post para crear la renta
      useEffect(()=> {
        async function sendBikeData() {
          try {
            const info = {
              userId: userId, //id usuario
              bikeId: id,
              price: cost
            }
            const response = await fetch(`http://localhost:3000/bike`, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(info)
            });
            let data = await response.json()
            setBike(data)
            return data
        
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        }
        sendBikeData();
    
      }, [cost]);

// Función para calcular el número de días entre dos fechas
  const calculateTotalDays = (start, end) => {
    if (start && end) {
      const days = differenceInDays(end, start);
      return days >= 0 ? days + 1 : 0; // Añadir 1 para incluir ambos días
    }
    return 0;
  };
  const handleOnClick = () =>{
    console.log('estos son los datos en este momento', userId, bike_id);
    
    setTotalDays(calculateTotalDays(startDate, endDate))
    setCost(calculateTotalDays(startDate, endDate) * 20)
  }
  console.log(totalDays);
  console.log(cost);

    return (
        <div className='container'>
        <div>
            <img className="img" src="https://multimedia.metrocuadrado.com/12512-M4946460/12512-M4946460_8_p.jpg" alt="" />
        </div>
        <div>
            <h2>Bicicleta mega cool super hd</h2>
            <p>La bici mas wow de todo el condado, 10/10 si pudiera volar seria lo ultimo en guaracha</p>
            <div style={{ marginBottom: '10px' }}>
            <label>Fecha de inicio:</label>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Selecciona una fecha de inicio"
                />
            </div>

            <div>
            <label>Fecha de fin:</label>
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Selecciona una fecha de fin"
                />
            </div>
            {startDate && endDate ? 
            (<>
            <p>Dias totales: {calculateTotalDays(startDate, endDate)}</p>
            <p>Cost total: {calculateTotalDays(startDate, endDate) * 20}</p>
            </>
            ) : (<p></p>)
            }
            <button onClick={handleOnClick}>Alquilar</button>
        </div>
        </div>
    );
    
}
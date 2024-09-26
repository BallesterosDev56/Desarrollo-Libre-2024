export const fetchEvents = async (region) => {
  try {
    const response = await fetch(`http://localhost:3000/events/${region}`);
    const data = await response.json();
    if(data.success === true){
      return data;
    }else{
      console.log(data);
      
    }
  } catch (error) {
    console.error("Error fetching events:", error);

  }
  setLoading(false);
};


export const fetchCreateEvents = async (datos) => {
    try {
        let response = await fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(datos)
        })
        let data = await response.json();
        
        return data;

    } catch (error) {
        console.log(error);
    }
};

export const fetchStonks = async (mes) => {
    try {
        console.log(mes);
        
      const response = await fetch(`http://localhost:3000/stadistics/${mes}`);
      const data = await response.json();
      if(data.success === true){
        console.log(data.result);
        
        return data.result;
      }else{
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
  
    }
    setLoading(false);
  };

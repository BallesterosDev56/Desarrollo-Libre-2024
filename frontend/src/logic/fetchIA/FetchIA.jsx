export const fetchIA = async (prompt)=> {
    try {
        let obj ={
            prompt: prompt
        }
        let response = await fetch('http://localhost:3000/pronostico', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        })
        let data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
        
    }
}
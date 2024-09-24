

export const fetchBikes = async (regional)=> {
    try {
        let dataFetch = {region: regional}
        
        let response = await fetch(`http://localhost:3000/bikes/${regional}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(dataFetch),
        });
        let data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error);
                
    }

}
export const fetchRegister = async (userData)=> {
    try {
        let response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(userData)
        })
        let data = await response.json();
        
        return data;

    } catch (error) {
        console.log(error);
        
    }
}
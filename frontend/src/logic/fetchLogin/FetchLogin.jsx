export const fetchLogin = async (userData)=> {
    try {
        let response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : userData
        })
        let data = await response.json();
        return data;

    } catch (error) {
        
    }
}
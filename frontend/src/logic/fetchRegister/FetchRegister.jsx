export const fetchRegister = async (userData)=> {
    try {
        let response = await fetch('', {
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
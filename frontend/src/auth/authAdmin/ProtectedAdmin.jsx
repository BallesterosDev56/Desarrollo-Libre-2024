import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedAdmin =  ({children})=>{
    const [render, setRender] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
        const adminState = sessionStorage.getItem('adminState');
        
        if(adminState === null) {
            setRender('false');
        }

    }, [])
    
    useEffect(()=> {
        if (render == 'false') {
            console.log(render);
            
            navigate('/login');
        }

    }, [render])
    return children;
}
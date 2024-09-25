import { createContext, useContext } from "react";

export const createUserContext = (dataUser)=> {
    const UserDataContext = createContext();

}

export const UserDataProvider = ({children})=> {


    return(
        <UserDataContext></UserDataContext>
    )
}
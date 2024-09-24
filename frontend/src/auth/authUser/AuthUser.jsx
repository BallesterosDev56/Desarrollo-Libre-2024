import { createContext, useContext } from 'react';

const AuthUser = createContext();

//Proveedor del contexto:
export const UserProvider = ({ children }) => {

  const login = () => {
    let existItem = sessionStorage.getItem('userState');

    if (existItem !== null) {
      sessionStorage.removeItem('userState');
    }
    sessionStorage.setItem('userState', 'true');
  }

  const logout = () => {
    let existItem = sessionStorage.getItem('userState');

    if (existItem !== null) {
      sessionStorage.removeItem('userState');
    }
    sessionStorage.setItem('userState', 'false');
  }

  return (
    <AuthUser.Provider value={{login, logout }}>
      {children}
    </AuthUser.Provider>
  );
};

//creamos el custom hook que es con el que vamos a poder utilizar las funciones para el cambio del estado:

export const useAuth = () => useContext(AuthUser);

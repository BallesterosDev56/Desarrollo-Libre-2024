import { Navigate } from 'react-router-dom';

export const ProtectedUser = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('userState');
  

  if (isAuthenticated === false || isAuthenticated === null) {
    return <Navigate to="/login" />;
  }

  return children;
};
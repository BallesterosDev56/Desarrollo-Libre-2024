import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from './auth/authUser/AuthUser';
import { AdminProvider } from './auth/authAdmin/AuthAdmin';

//importamos los componentes protectores
import {ProtectedUser} from './auth/authUser/ProtectedUser'
import {ProtectedAdmin} from './auth/authAdmin/ProtectedAdmin'

//paginas a renderizar:
import { Redirect } from './pages/redirect/Redirect';
import { Home } from './pages/user/home/Home';
import { Regional } from './pages/user/regional/Regional';
import { Login } from './pages/user/login/Login';
import { Register } from './pages/user/register/Register';

//creamos el router provider con las rutas y los componentes:
const routes = createBrowserRouter([
  {
    path: '/', 
    element: <Redirect></Redirect> 
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/home/:regional',
    element: <Regional></Regional>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
]);


function App() {

  return (
    <AdminProvider>
      <UserProvider>
      <RouterProvider router={routes}></RouterProvider>
      </UserProvider>
    </AdminProvider>
  )
}

export default App

import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from './auth/authUser/AuthUser';
import { AdminProvider } from './auth/authAdmin/AuthAdmin';

//importamos los componentes protectores
import {ProtectedUser} from './auth/authUser/ProtectedUser'
import {ProtectedAdmin} from './auth/authAdmin/ProtectedAdmin'

//paginas de usuario:
import { Redirect } from './pages/redirect/Redirect';
import { Home } from './pages/user/home/Home';
import { Regional } from './pages/user/regional/Regional';
import { Login } from './pages/user/login/Login';
import { Register } from './pages/user/register/Register';
import { Alquilar } from './pages/user/alquilar/Alquilar';

// paginas de administrador: 
import { HomeAdmin } from './pages/admin/homeAdmin/HomeAdmin';

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
  {
    path: '/home/:regional/:bike_id',
    element: <Alquilar></Alquilar>
  },
  {
    path: '/admin_home',
    element: 
    <ProtectedAdmin>
      <HomeAdmin></HomeAdmin>
    </ProtectedAdmin>
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

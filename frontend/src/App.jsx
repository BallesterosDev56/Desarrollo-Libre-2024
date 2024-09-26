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
import { Pagar } from './pages/user/pagar/Pagar';


// paginas de administrador: 
import { HomeAdmin } from './pages/admin/homeAdmin/HomeAdmin';
import { Analitics } from './pages/admin/analitics/Analitics';
import { CreateEvent } from './pages/admin/createEvent/CreateEvent';

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
  {
    path: '/admin_home/analitics',
    element: 
    <ProtectedAdmin>
      <Analitics></Analitics>
    </ProtectedAdmin>
  },
  {
    path: '/admin_home/create_event',
    element: 
    <ProtectedAdmin>
      <CreateEvent></CreateEvent>
    </ProtectedAdmin>
  },
  {
    path: '/pagar',
    element: 
    <ProtectedUser>
      <Pagar></Pagar>
    </ProtectedUser>
  }
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

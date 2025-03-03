import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
import Admin from './pages/Admin.jsx';
import Manager from './pages/Manager.jsx';
import User from './pages/User.jsx';

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />

    <Route path='/admin' element={<PrivateRoute allowedRoles={['admin']}/>}>
    <Route path='dashboard' element={<Admin />} />
    </Route>

    <Route path='/manager' element={<PrivateRoute allowedRoles={['admin','manager']}/>}>
    <Route path='dashboard' element={<Manager />} />
    </Route>

    <Route path='/user' element={<PrivateRoute allowedRoles={['admin','manager','user']}/>}>
    <Route path='dashboard' element={<User />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

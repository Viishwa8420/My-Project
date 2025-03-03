import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../component/Header';

function Admin() {

    const [auth, setAuth] = useAuth();
  return (
    <div>
         <Header/>
      <h1>hi Admin</h1>
    </div>
  )
}

export default Admin

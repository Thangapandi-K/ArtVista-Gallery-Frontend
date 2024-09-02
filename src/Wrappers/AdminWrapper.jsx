import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const AdminWrapper = () => {

  const profile = useLoaderData();

  const userData = profile.data.user;

  const [user, setUser] = useState(userData);

  return (
    <>
      <AdminHeader user={user}/>

      <main style={{ minHeight: '72vh'}}>
        <Outlet />
      </main>

      <Footer />
    
    </>
  )
}

export default AdminWrapper
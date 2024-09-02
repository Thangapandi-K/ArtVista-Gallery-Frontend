import { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';

const UserWrapper = () => {

  const navigate = useNavigate();

  const profile = useLoaderData();

  const userData = profile.data.user;

  const [user, setUser] = useState(userData);

  useEffect(() => {

    if(user && user.role === 'admin') {
        navigate('/admin')
    } else if (!user) {
        navigate('/')
    }
  },[])


  return (
    <>
      <UserHeader user={user}/>
      <main style={{ minHeight: '75vh'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default UserWrapper
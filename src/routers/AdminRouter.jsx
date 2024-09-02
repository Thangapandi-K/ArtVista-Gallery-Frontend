import { Navigate, Outlet, useLoaderData } from 'react-router-dom';

const AdminRouter = () => {

  const user = useLoaderData()

  return user.data.user.role === 'admin' ? <Outlet /> : Navigate({ to:'/user', replace: true})

};

export default AdminRouter
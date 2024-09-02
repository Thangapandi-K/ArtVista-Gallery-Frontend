import React from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

const ProtectedRouter = () => {

  const isAuthenticated = useLoaderData();

  return isAuthenticated ? <Outlet /> : Navigate({ to: '/', replace: true });

};

export default ProtectedRouter
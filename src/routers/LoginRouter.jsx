import React from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

const LoginRouter = () => {

    const isAuthenticated = useLoaderData();

  return isAuthenticated ? Navigate({ to:'/user', replace: true}) : <Outlet />
}

export default LoginRouter
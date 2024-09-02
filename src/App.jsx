import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginRouter from './routers/LoginRouter';
import userLoaders from './loaders/userLoaders';
import HomeWrapper from './Wrappers/HomeWrapper';
import Home from './pages/home/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import ProtectedRouter from './routers/ProtectedRouter';
import UserWrapper from './Wrappers/UserWrapper';
import UserProducts from './pages/user/UserProducts';
import UserCart from './pages/user/UserCart';
import UserOrders from './pages/user/UserOrders';
import Profile from './components/Profile';
import cartLoaders from './loaders/cartLoader';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AdminWrapper from './Wrappers/AdminWrapper';
import AddProduct from './pages/admin/AddProduct';
import ViewProducts from './pages/admin/ViewProducts';
import ViewOrders from './pages/admin/ViewOrders';
import AllUsers from './pages/admin/AllUsers';
import AdminRouter from './routers/AdminRouter';
import PageNotFound from './components/PageNotFound';
import Success from './components/Success';
import Dashboard from './pages/admin/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRouter />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <HomeWrapper />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "register",
            element: <Registration />
          },
          {
            path: "login",
            element: <Login />
          },
          {
            path: "aboutus",
            element: <AboutUs />
          },
          {
            path: "contactus",
            element: <ContactUs />
          }
        ]
      }
    ]
  },
  {
    path: 'user',
    element: <ProtectedRouter />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: '',
        element: <UserWrapper />,
        loader: userLoaders.getProfile,
        children: [
          {
            path: '',
            element: <UserProducts />
          },
          {
            path: 'cart',
            element: <UserCart />,
            loader: cartLoaders.getCart
          },
          {
            path: 'orders',
            element: <UserOrders />
          },
          {
            path: 'profile',
            element: <Profile />,
            loader: userLoaders.getProfile
          },
          {
            path: 'success',
            element: <Success/>
          }
        ]     
      }
    ]
  },
  {
    path: 'admin',
    element: <ProtectedRouter />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: '',
        element: <AdminRouter />,
        loader: userLoaders.getProfile,
        children: [
          {
            path: '',
            element: <AdminWrapper />,
            loader: userLoaders.getProfile,
            children: [
              {
                path: '',
                element: <Dashboard/>
              },
              {
                path: 'addproduct',
                element: <AddProduct />
              },
              {
                path: 'viewproduct',
                element: <ViewProducts />
              },
              {
                path: 'vieworders',
                element: <ViewOrders />
              },
              {
                path: 'allusers',
                element: <AllUsers />,
                loader: userLoaders.getUsers
              },
              {
                path: 'profile',
                element: <Profile />,
                loader: userLoaders.getProfile            
              },
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);

const App = () => {
  
  return <RouterProvider router={router}/>
}

export default App;
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const HomeWrapper = () => {
  

  return (
    <>
        <HomeHeader />
        <main style={{ minHeight: '72vh' }}>
        <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default HomeWrapper
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/')
    }
  return (
   
   <div className='container d-flex justify-content-center'>
     <div className='text-center align-items-center'>
     <div className='fs-1 fw-bold m-5'>404</div>
     <div className='fs-2 fw-bolder m-5'>Page Not Found</div>
    <div>
        <button className='btn m-5 btn-warning' onClick={handleRoute}>Back to Home</button>
    </div>
   </div>
     </div>

  )
}

export default PageNotFound
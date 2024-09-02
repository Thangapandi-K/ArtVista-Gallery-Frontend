import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/')
    }
  return (
    <>
    <div> 404 PageNotFound</div>
    <div>
        <button onClick={handleRoute}>Back to Home</button>
    </div>
    </>
  )
}

export default PageNotFound
import React, { useEffect } from 'react'
import { orderServices } from '../services/orderServices';
import { useNavigate } from 'react-router-dom';

const Success = () => {

  const navigate = useNavigate()

  // create order
  const placeOrder = () => {
    orderServices.createOrder()
    .then(response => {
      alert(response.data.message);
    })
    .catch(error => {
      alert(error.response.message)
    })
  }

  useEffect(() => {
    placeOrder()
    navigate('/user/orders')
  },[])

  return (
    <></>
  )
}

export default Success;
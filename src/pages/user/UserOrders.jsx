import React, { useContext, useEffect, useState } from 'react'
import { orderContext } from '../../contexts/OrderContext'
import { orderServices } from '../../services/orderServices';
import { cartContext } from '../../contexts/CartContext';
import { BPORT } from '../../services/Port'

const UserOrders = () => {

  const { orderL, setOrderL } = useContext(orderContext);
  const { cartCount, setCartCount } = useContext(cartContext);
  const [statusL, setStatusL] = useState();

    const getOrder = async() => {
      await orderServices.getOrders()
    .then(response => {
      setOrderL(response.data.order);
      setStatusL(response.data.status);
      setCartCount
    })
    .catch(error => {
      error.message.error;
    })
    }

    useEffect(() => {
      getOrder()
    },[]);

  return (
    <div className='container'>
      <div className='fs-3 fw-bolder m-3 p-2 text-center bg-light border shadow p-1 sticky-top'>Orders</div>
      <div className='row'>
      {
        (orderL.length == 0)
        ?
        <div className='text-center p-5'>No Orders</div>
        :        
            (orderL.map((item, index) => {
              return (
                <div className='card m-2 row shadow' key={index}>
                  <div className='card-image col mt-2'><img className='card-image' src={`${BPORT}/uploads/${item.product.image}`} alt={item.title} style={{width: `10vw`}}/></div>
                  <div className='col'>
                  <div className='card-body row'>
                    <div className='card-text text-start col'>
                      <div className='fw-bolder'>Title :</div>
                      <div>{item.product.title}</div>
                    </div>
                    <div className='card-text text-center col'>
                      <div className='fw-bolder'>Price :</div>
                      <div>Rs.{item.product.price}.00</div>
                    </div>
                    <div className='card-text text-end col'>
                      <div className='fw-bolder'>Order Status :</div>
                      <div>{item.status}</div>
                    </div>
                    </div>
                </div>
                </div>
              )
            }))
      }
      </div>
    </div>
  )
}

export default UserOrders;
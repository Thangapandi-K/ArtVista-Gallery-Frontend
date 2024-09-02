import React, { useEffect, useState } from 'react'
import { orderServices } from '../../services/orderServices';
import { BPORT } from '../../services/Port';

const ViewOrders = () => {

  const [ordersL, setOrdersL] = useState([]);
  const [filter, setFilter] = useState('All');

  const getAllOrders = async () => {

    await orderServices.getAllOrders()
    .then(response => {
      setOrdersL(response.data.orders);
    })
    .catch(error => {
      error.message.error;
    })
  }

  useEffect(() => {
    getAllOrders();
  },[])

  const orderStatus = async (ordStatus, ordId) => {

    await orderServices.updateOrder(ordStatus, ordId)
    .then(response => {
      getAllOrders()
      alert(response.data.message)
    })
    .catch(error => {
      alert(error.message.error);
    })
  }


  const orderFilter = ordersL.filter((item) => {
    if(filter === 'All') {
      return item;
    } else {
      return item.status === filter
    }
  })

  return (
    <div className='container'>
      <div className='fs-2 fw-bolder m-3 text-center bg-success bg-gradient text-light sticky-top'>Orders</div>
      <div>
      <div className="dropdown col text-end h6"> Order Filter : &nbsp;
        <button className={`btn btn-primary dropdown-toggle ${filter === 'All' ? 'btn-primary' : filter === 'Order Placed' ? 'btn btn-warning' : filter === 'Item Dispatched' ? 'btn btn-info' : filter === 'Item Delivered' ? 'btn btn-success' : 'btn btn-danger'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {filter}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropDown">
          <li>
            <button className='dropdown-item' onClick={() => setFilter('All')}>
              All
            </button>
          </li>
          <li>
            <button className='dropdown-item' onClick={() => setFilter('Order Placed')}> 
            Order Placed
            </button>
          </li>
          <li>
            <button className='dropdown-item' onClick={() => setFilter('Item Dispatched')}>
            Item Dispatched
            </button>
          </li>
          <li>
            <button className='dropdown-item' onClick={() => setFilter('Item Delivered')}>
            Item Delivered
            </button>
          </li>
          <li>
            <button className='dropdown-item' onClick={() => setFilter('Order Cancelled')}>
            Order Cancelled
            </button>
          </li>
        </ul>
      </div>
      </div>
      <div className='row'>
      {
        (ordersL.length == 0)
        ?
        <div className='text-center p-5'>No Orders</div>
        :
        <div className='row d-flex'>
          {
            (orderFilter.map((item, index) => {
              return (
                <div className='col mb-3' key={index}>
                  <div className='card p-3' style={{ width: '18rem'}}>
                  <div className='card-image col mt-2'><img className='card-image w-100' src={`${BPORT}/uploads/${item.product.image}`} alt={item.title} style={{width: `10vw`}}/></div>
                  
                  <div className='card-body row'>

                  <div className='card-title row mb-1'>
                    <div className='col fw-bold'>Title : </div>
                    <div className='col'>{item.product.title}</div>
                  </div>

                  <div className='card-subtitle row mb-1'>
                    <div className='col fw-bold'>Price :</div>
                    <div className='col'>Rs.{item.product.price}.00</div>
                  </div>

                  <div className='card-subtitle row mb-1'>
                    <div className='col fw-bold'>Name :</div>
                    <div className='col'>{item.product.user.name}</div>
                  </div>

                  <div className='card-subtitle row mb-1'>
                    <div className='col fw-bold'>Email :</div>
                    <div className='col'>{item.product.user.email}</div>
                  </div>

                  <div className='card-subtitle row mb-1'>
                    <div className='col fw-bold'>Address :</div>
                    <div className='col'>{item.product.user.address}</div>
                  </div>

                  <div className='card-subtitle row mb-1'>
                    <div className='col fw-bold'>Phone :</div>
                    <div className='col'>{item.product.user.phone}</div>
                  </div>

                  <div className="dropdown p-1 fw-bold row mb-1">  &nbsp;
                    <div className='col'>Status :</div>
                    <div className='col'>
                      <button className={`btn btn-primary btn-sm dropdown-toggle ${item.status === 'Order Placed' ? 'btn btn-warning' : item.status === 'Item Dispatched' ? 'btn btn-info' : item.status === 'Item Delivered' ? 'btn btn-success' : 'btn btn-danger'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {item.status}
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropDown">
                          <li>
                              <button className='dropdown-item' type="button" onClick={() => orderStatus('Order Placed', item._id)}> 
                              Order Placed
                              </button>
                          </li>
                          <li>
                              <button className='dropdown-item' type="button" onClick={() => orderStatus('Item Dispatched', item._id)}>
                              Item Dispatched
                              </button>
                          </li>
                          <li>
                              <button className='dropdown-item' type="button" onClick={() => orderStatus('Item Delivered', item._id)}>
                              Item Delivered
                              </button>
                          </li>
                          <li>
                              <button className='dropdown-item' type="button" onClick={() => orderStatus('Order Cancelled', item._id)}>
                              Order Cancelled
                              </button>
                          </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
              )
            }))
          }
        </div> 
      }
      </div>
    </div>
  )
}

export default ViewOrders
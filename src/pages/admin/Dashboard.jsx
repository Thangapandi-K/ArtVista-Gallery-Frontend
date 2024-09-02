import React, { useEffect, useState } from 'react'
import { orderServices } from '../../services/orderServices';
import { Link } from 'react-router-dom';

const Dashboard = () => {


    const [ordersL, setOrdersL] = useState([]);

    const [orderCount, setOrderCount] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(0);
    const [orderDispatched, setOrderDispatched] = useState(0);
    const [orderDelivered, setOrderDelivered] = useState(0);
    const [orderCancelled, setOrderCancelled] = useState(0);

    const [orderAmount, setOrderAmount] = useState(0);    
    const [orderPAmount, setOrderPAmount] = useState(0);
    const [orderDisAmount, setOrderDisAmount] = useState(0);
    const [orderDelAmount, setOrderDelAmount] = useState(0);
    const [orderCAmount, setOrderCAmount] = useState(0);


    const getAllOrders = async () => {
  
      await orderServices.getAllOrders()
      .then(response => {
        setOrdersL(response.data.orders);

        const data = response.data.orders;
        setOrderCount(data.length);

        const placed = [];
        const dispatched = [];
        const delivered = [];
        const cancelled = [];

        data.map(item => {
            if(item.status === 'Order Placed') {
                placed.push(item);
            } else if (item.status === 'Item Dispatched') {
                dispatched.push(item);
            } else if (item.status === 'Item Delivered') {
                delivered.push(item)
            } else if (item.status === 'Order Cancelled') {
                cancelled.push(item)
            }
        })

        const totalOrderAmount = data.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.product.price
        },0)

        const orderPlacedAmount = placed.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.product.price
        },0)

        const orderDispatchedAmount = dispatched.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.product.price
        },0)

        const orderDeliveredAmount = delivered.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.product.price
        },0)

        const orderCancelledAmount = cancelled.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.product.price
        },0)

        setOrderPlaced(placed.length);
        setOrderDispatched(dispatched.length);
        setOrderDelivered(delivered.length);
        setOrderCancelled(cancelled.length);

        setOrderAmount(totalOrderAmount);
        setOrderPAmount(orderPlacedAmount);
        setOrderDisAmount(orderDispatchedAmount);
        setOrderDelAmount(orderDeliveredAmount);
        setOrderCAmount(orderCancelledAmount);


      })
      .catch(error => {
        error.message.error;
      })
    }


    useEffect(() => {
        getAllOrders();
        //getData();
    },[])



  return (
    <>
    <div className='container'>
        <div className='fs-2 fw-bolder m-3 text-center bg-success bg-gradient text-light sticky-top'>DASHBOARD</div>
        <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <div className='border m-1 text-center p-5 border-primary bg-primary-subtle'>
                <div className='fs-6 fw-medium'>Total Orders</div><br/>
                <div className='fw-bold fs-3'>{orderCount}</div><br/>
                <div className='fw-bold fs-4'>Rs.{orderAmount}.00</div>
            </div>
            <div className='border m-1 text-center p-5 border-warning bg-warning-subtle'>
                <div className='fs-6 fw-medium'>Orders Placed</div><br/>
                <div className='fw-bold fs-3'>{orderPlaced}</div><br/>
                <div className='fw-bold fs-4'>Rs.{orderPAmount}.00</div>
            </div>
            <div className='border m-1 text-center p-5 border-info bg-info-subtle'>
                <div className='fs-6 fw-medium'>Orders Dispatched</div><br/>
                <div className='fw-bold fs-3'>{orderDispatched}</div><br/>
                <div className='fw-bold fs-4'>Rs.{orderDisAmount}.00</div>
            </div>
            <div className='border m-1 text-center p-5 border-success bg-success-subtle'>
                <div className='fs-6 fw-medium'>Orders Delivered</div><br/>
                <div className='fw-bold fs-3'>{orderDelivered}</div><br/>
                <div className='fw-bold fs-4'>Rs.{orderDelAmount}.00</div>
            </div>
            <div className='border m-1 text-center p-5 border-danger bg-danger-subtle'>
                <div className='fs-6 fw-medium'>Orders Cancelled</div><br/>
                <div className='fw-bold fs-3'>{orderCancelled}</div><br/>
                <div className='fw-bold fs-4'>Rs.{orderCAmount}.00</div>
            </div>
        </div>
        <div className='text-center p-5 m-5'>
            <Link className='text-center p-3 btn btn-success fw-bolder' to='vieworders'>Go To Orders</Link>
        </div>
    </div>
    </>
  )
}

export default Dashboard
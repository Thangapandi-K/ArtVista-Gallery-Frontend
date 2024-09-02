import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../contexts/CartContext'
import { cartServices } from '../../services/cartServices';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { BPORT } from '../../services/Port';

const UserCart = () => {

  const { cartL, setCartL, cartCount, setCartCount } = useContext(cartContext);

  const [total, setTotal] = useState(0);

  //getting cart data
  const getCart = async() => { 
    await cartServices.getCart()
    .then(response => {
      setCartL(response.data.cart);
      setCartCount(response.data.cart.length);
    })
    .catch(error => {
        error.message.error;
    })
  };

  useEffect(() => {
    getCart()
  },[]);

  //remove product from cart
  const removeFromCart = async (productId) => {  
    await cartServices.removeProduct(productId)
    .then(response => {
      alert(response.data.message);
      const removedProduct = cartL.filter(product => product._id !== productId);
      setCartL(removedProduct);
      setCartCount(removedProduct.length);
    })
    .catch(error => {
      alert(error.message.error);
    })
  };

  useEffect(() => {
    const totalAmout = cartL.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price}, 0);
    setTotal(totalAmout);
  }, [cartL]);

  const handleMakePayment = async () => {

    try {

      if(cartL.length == 0) {
        return alert('Please Add Paintings to Cart')
      }

      const stripe = await loadStripe("pk_test_51Ppq4908sJyi3LuGSDfF1zZ66AzEEJV6p3yKt8lsYoJUkWcXTbVrNcifpdS42k59GBgcqkE0excFEfeajOgUvo3s00WPjOg1sm");

      const data = JSON.stringify(cartL)

      const response = await axios.post(`${BPORT}/api/v1/checkout/payment`, 
        data, 
        {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      const session = response.data.sessionId;

      const result = await stripe.redirectToCheckout({ sessionId: session });

      if(result.error) {
        alert("Payment can't start")
      }

    } catch (error) {
      alert("Payment Failed")
    }
  }

  return (
    <div className='container'>
      <div className='fs-3 p-2 bg-light shadow border fw-bolder m-3 text-center  sticky-top'>Cart</div>
      <div className='d-flex align-items-center bg-light-subtle border bg-gradient shadow mt-2 mb-2 p-2 row sticky-top'>
        <span className='col text-start p-2'><h5> Grand Total: Rs.{total}.00 </h5></span>
        <span className='col text-end p-2'><button type='button' className='col btn btn-warning' onClick={handleMakePayment}>Place Order</button></span>
    </div>
    <div className='row'>
      {
        (cartL.length == 0)
        ?
        <div className='text-center p-5'>Your Cart Is Empty</div>
        :
        (cartL.map((item, index) => {
          return (
            <div className='col col-sm-12 col-md-6 col-lg-3 mb-3' key={item._id}>
              <div className="card p-3" style={{ width: '18rem' }}> 
              <img src={`${BPORT}/uploads/${item.product.image}`} className="card-img-top w-100" alt={item.product.title}/>
              <div className="card-body p-2">
                  <div className='card-title row p-2 mb-2'>
                    <div className="col fw-bold">Title :</div>
                    <div className="col">{item.product.title}</div>
                  </div>

                  <div className="card-subtitle row p-2 mb-2">
                    <div className="col fw-bold">Price :</div>
                    <div className="col">Rs.{item.product.price}.00</div>
                  </div>

                  <div className='row'>
                  <button className='btn btn-outline-danger' onClick={() => removeFromCart(item._id)}>Remove</button>
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

export default UserCart
import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../contexts/ProductContext'
import { cartServices } from '../../services/cartServices'
import { cartContext } from '../../contexts/CartContext'
import { productServices } from '../../services/productServices'
import { BPORT } from '../../services/Port'


const UserProducts = () => {

  const { productsL, setProductsL } = useContext(productContext)
  const { cartL, setCartL, cartCount, setCartCount } = useContext(cartContext);

  const getProducts = async() => { 
    await productServices.viewProducts()
    .then(async(response) => {
        setProductsL(response.data.products);
        setCartCount
    })
    .catch(error => {
        error.message.error;
    })
  };

  useEffect(() => {
      getProducts()
  },[]);

  const addToCart = async (product) => { 
    await cartServices.addCart(product)
    .then(async(response) => {
      alert(response.data.message)
      await cartServices.getCart()
      .then(response => {
        setCartCount(response.data.cart.length)
      })
    })
    .catch(error => {
      alert(error.message.error);
    })
  }

  return (
    <div className='container'>
      <div className='fs-3 fw-bolder m-3 text-center bg-light shadow border sticky-top p-1'>Paintings</div>
      <div className='d-flex row'>
        {
          productsL.map(product => (
            <div className='col col-sm-12 col-md-6 col-lg-3 mb-3' key={product._id}>
              <div className="card p-3" style={{ width: '18rem' }}>

                <img src={`${BPORT}/uploads/${product.image}`} className="card-img-top w-100" alt={product.title}/>

                <div className="card-body p-2">

                <div className='card-title row p-2'>
                    <div className="col fw-bold">Title :</div>
                    <div className="col">{product.title}</div>
                  </div>

                  <div className='card-title row p-2'>
                    <div className="col fw-bold">Artist :</div>
                    <div className="col">{product.artist}</div>
                  </div>

                  <div className="card-subtitle row p-2">
                    <div className="col fw-bold">Description :</div>
                    <div className="col">{product.description}</div>
                  </div>

                  <div className="card-subtitle row p-2">
                    <div className="col fw-bold">Price :</div>
                    <div className="col">Rs.{product.price}.00</div>
                  </div>

                  <div className='row p-3'>
                    <a href="#" className="btn btn-primary" onClick={() => addToCart(product)}>Add To Cart</a>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserProducts
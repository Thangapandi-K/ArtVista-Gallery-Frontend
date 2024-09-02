import React, { useContext, useEffect } from 'react'
import { productContext } from '../../contexts/ProductContext';
import { productServices } from '../../services/productServices';
import { BPORT } from '../../services/Port';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    const { productsL, setProductsL } = useContext(productContext)

    const getProducts = async() => { 
        await productServices.viewProducts()
        .then(async(response) => {
            setProductsL(response.data.products);
        })
        .catch(error => {
            error.message.error;
        })
      };
    
      useEffect(() => {
          getProducts()
      },[]);




  return (
    <>
    <div className='container'>
            <div className="text-center fs-4 m-3 mt-5">
                        Paintings are a form of visual art that captures the expression of ideas and emotions on a two-dimensional surface
            </div>
            <div id="carouselExampleAutoplaying" className="carousel slide m-5 shadow-lg p-2 bg-body-tertiary rounded" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="slide1.jpg" className="d-block w-100 img-fluid" alt="art1" />
                </div>
                <div className="carousel-item">
                    <img src="slide2.jpg" className="d-block w-100 img-fluid" alt="art2" />
                </div>
                <div className="carousel-item">
                    <img src="slide3.jpg" className="d-block w-100 img-fluid" alt="art3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className='row'>
            <div className='text-center m-4 fs-3'>
                ~ An Online Platform for Original & Unique Paintings ~
            </div>
        </div>
        <div>
        <section className="pt-5 pb-5">

        <div className="row">
            <div className="col-6">
                <h3 className="mb-3"> Paintings </h3>
            </div>
            <div className="col-6 text-right">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                            {
                                productsL.length === '0' ? 'No Paintings' : 

                                productsL.slice(0,3).map(product => 
                                    {
                                    return (
                                        <div className="col-md-4 mb-3" onClick={() => navigate('/login')} key={product._id}>
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src={`${BPORT}/uploads/${product.image}`}/>
                                                <div className="card-body">
                                                    <h4 className="card-title">{product.title}</h4>
                                                    <p className="card-text">{product.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                            {
                                productsL.length === '0' ? 'No Paintings' :
                                
                                productsL.slice(3,6).map(product => 
                                    {
                                    return (
                                        <div className="col-md-4 mb-3 btn" onClick={() => navigate('/login')} key={product._id}>
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src={`${BPORT}/uploads/${product.image}`}/>
                                                <div className="card-body">
                                                    <h4 className="card-title">{product.title}</h4>
                                                    <p className="card-text">{product.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </section>
        </div>

        </div>
    </>
  )
}

export default Home
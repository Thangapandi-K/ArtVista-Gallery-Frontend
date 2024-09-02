import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../contexts/ProductContext'
import { productServices } from '../../services/productServices';
import { BPORT } from '../../services/Port';


const ViewProducts = () => {

  const { productsL, setProductsL } = useContext(productContext);

  const getProducts = async() => { 
    await productServices.viewProducts()
    .then(response => {
        setProductsL(response.data.products);
    })
    .catch(error => {
        error.message.error;
    })
  };

  const deleteProduct = (productId) => {

    confirm('Confirm Delete ?')
    ?
    productServices.deleteProduct(productId)
    .then(response => {
      alert(response.data.message)
      const balanceProducts = productsL.filter((product) => product._id !== productId);
      setProductsL(balanceProducts);
    })
    .catch(error => {
      alert(error.reponse.message)
    })
    :
    alert('Product Deletion cancelled')
  }

  const [editingId, setEditingId] = useState(null);
  const [disable, setDisable] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedArtist, setUpdatedArtist] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  const editPainting = (item) => {

    setEditingId(item._id);
    setUpdatedTitle(item.title);
    setUpdatedArtist(item.artist);
    setUpdatedDescription(item.description);
    setUpdatedPrice(item.price)    
  };

  const submitEditedPainting = (e) => {
        
    if(editingId) {
        
        updatePainting(editingId, updatedTitle, updatedArtist, updatedDescription, updatedPrice);

        setEditingId(null);
    }
  };

  const updatePainting = (id, title, artist, description, price) => {

    productServices.editProduct(id, title, artist, description, Number(price))
    .then(response => {
        alert("Painting Updated");
        getProducts();
    }
    )
    .catch(error => {
        alert("Painting Not Updated")
    })

  };

  useEffect(() => {
      getProducts()
  },[]);

  return (
    <>
    <div className='container'> 
    <div className='fs-2 fw-bolder m-3 text-center bg-light shadow border sticky-top'>Paintings</div>
        <div className='d-flex row'>
        {

          (productsL.length == 0)
          ?
          <div className='text-center p-5'>Add New Paintings</div>
          :
          productsL.map(product => (
            <div className='col col-sm-12 col-md-6 col-lg-3 mb-3' key={product._id}>

              <div className='card p-3' style={{ width: '18rem'}}>

                <img src={`${BPORT}/uploads/${product.image}`} className="card-image-top w-100" alt={product.title}/>

                <div className="card-body p-2">

                  <div className='card-title row'>
                    <div className='col fw-bold'>Title : </div>
                    <div className='col'>{editingId === product._id ? (<input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)}/>) : (product.title)}</div>
                  </div>

                  <div className='card-subtitle mb-2 text-muted row'>
                    <div className='col fw-bold'>Artist : </div>
                    <div className='col'>{editingId === product._id ? (<input type="text" value={updatedArtist} onChange={(e) => setUpdatedArtist(e.target.value)}/>) : (product.artist)}</div>
                  </div>

                  <div className="card-subtitle mb-2 text-muted row">
                    <div className="col fw-bold">Description : </div>
                    <div className="col">{editingId === product._id ? (<input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)}/>) : (product.description)}</div>
                  </div>

                  <div className="card-subtitle mb-2 text-muted row">
                    <div className="col fw-bold">Price :</div>
                    <div className="col">Rs.{editingId === product._id ? (<input type="number" value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)}/>): (product.price)}.00</div>
                  </div>

                  <div className='row'>
                    <a className='col'>{editingId === product._id ? (<button className='btn mr-2 btn-success m-2' onClick={() => submitEditedPainting(product)}>Update</button>) :<button className='btn btn-warning mr-2 m-2' onClick={()=>editPainting(product)}>Edit</button>}</a>

                    <a href="#" className="btn mr-2 btn-danger m-2 col" onClick={() => deleteProduct(product._id)} disabled={disable}>Delete</a>
                  </div>

                </div>

              </div>

            </div>
          ))
        }
      </div>
    </div>
  </>
  )
}

export default ViewProducts
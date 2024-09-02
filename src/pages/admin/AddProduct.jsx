import React, { useState } from 'react'
import { productServices } from '../../services/productServices';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState('');
    const[image, setImage] = useState('');  

    const addProduct = (e) => {

    e.preventDefault();

    const formData = new FormData()
    formData.append('image', image)

    const product = {
        title,
        artist,
        description,
        price,
        image
    }

  productServices.addProduct(product)

  .then(response => {

    alert(response.data.message);

      setTitle('');
      setArtist('');
      setDescription('');
      setPrice('');
      setImage('');
      navigate('/admin/viewproduct')

  })
  .catch(error => {
      alert(error.response.message);
    });
  }
    
  return (
    <div className='container'>
        <div className='fs-2 p-2 fw-bolder m-3 text-center bg-light shadow border sticky-top'>ADD PRODUCT DETAILS</div>
        <div className='d-flex justify-content-center'>
        <form onSubmit={addProduct} className='form col-md-6 p-3 col-lg-12 border border-5 w-50'>
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className='form-control' id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
                </div>
                <div>
                    <label htmlFor="artist" className="form-label">Artist</label>
                    <input type="text" className='form-control' id="artist"
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}/>
                </div>
                <div>
                    <label htmlFor="description" className="form-label">Desciption</label>
                    <input type="text" className='form-control' id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                </div>
                <div>
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className='form-control' id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}/>
                </div>
                <div>
                    <label htmlFor="image" className="form-label">Upload Photo</label>
                    <input type="file" className='form-control' id="image"
                    onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <div>
                    <button className='btn btn-primary m-3'>Add Product</button>
                </div>
        </form>
        </div>
    </div>
  )
}

export default AddProduct
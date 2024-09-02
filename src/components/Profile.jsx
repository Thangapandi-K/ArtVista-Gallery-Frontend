import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { userServices } from '../services/userServices';

const Profile = () => {

    const profile = useLoaderData();

    const userData = profile.data.user;

    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(profile ? userData.name : '')
    const [email, setEmail] = useState(profile ? userData.email : '')
    const [address, setAddress] = useState(profile ? userData.address : '')
    const [phone, setPhone] = useState(profile ? userData.phone : '')

    const editProfile = async () => {

        setEdit(!edit);

        if(edit) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;

            await userServices.editProfile(name, email, address, phone)
            .then(response => {
                alert('Profile Updated Successfully');
            })
            .catch(error => {
                alert('Profile Update Failed');
            })
        }
    };

  return (
    <div className='container'>
        <div className='fs-2 fw-bolder m-3 text-center bg-success bg-gradient text-light sticky-top'>Profile </div>
          <div className='card p-4 bg-light row'>
            <form className='col'>
            <div className='p-2'>
              <label className='fs-5' htmlFor='nam'>Name : &nbsp; </label>
              <input type="text" className='form-control fs-5' id='name' disabled={!edit} 
              value={name}
              onChange={(e) =>setName(e.target.value)}/>
            </div>
            <div className='p-2'>
              <label className='fs-5' htmlFor='email'>Email : &nbsp; </label>
              <input className='fs-5 form-control'  id='email' disabled={!edit}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className='p-2'>
              <label className='fs-5' htmlFor='address'>Address : &nbsp; </label>
              <input className='fs-5 form-control'  id='address' disabled={!edit}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              />
          </div>
          <div className='p-2'>
              <label className='fs-5' htmlFor='phone'>Phone : &nbsp; </label>
              <input className='fs-5 form-control'  id='phone' disabled={!edit}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
          </div>
          <div className='text-end mt-3'>
            <button type='button' className='btn btn-primary' onClick={editProfile}>{edit ? 'Save Profile' : 'Edit Profile'}</button>
          </div>
          </form>
        </div>   
    </div>
  )
}

export default Profile;
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { userServices } from '../../services/userServices';

const AllUsers = () => {

  const userData = useLoaderData();

  const allUsers = userData.data.users;

  const users = allUsers.filter((user) => user.role !== 'admin')

  const [usersL, setUsersL] = useState(users);

  const deleteUser = (userId) => {

    confirm(`Are you sure to delete the profile?`) 
    
    ?

    userServices.deleteUsers(userId)
    .then(response => {
      alert(response.data.message);

      const balanceUsers = usersL.filter((user) => user._id !== userId);
      setUsersL(balanceUsers);
    })
    .catch(error => {
      alert(error.response.message)
    })

    : alert('Not Deleted')
    }
  

  return (
    <div className='container'>
        <div className='fs-2 fw-bolder m-3 text-center bg-light shadow border p-2 sticky-top'>All Users</div>
        <div> <br/>
        <table className='table table-striped col-12 col-md-6 col-lg-3'>
            <thead>
                <tr className='table-dark text-center'>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {   // converting users data into tables
                    usersL.map((user, index) => (
                        <tr key={index} className='text-center'>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteUser(user._id, user.name)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default AllUsers
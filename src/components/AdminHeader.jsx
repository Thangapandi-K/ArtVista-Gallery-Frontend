import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userServices } from '../services/userServices';

const AdminHeader = ({user}) => {

    const navigate = useNavigate();

    const handleLogOut = () => {

        userServices.logout()
        .then(response => {
            alert(response.data.message);
            navigate('/');
        })
        .catch(error => {
            alert(error.message.error);
        })
    };

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-6">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">ArtVista</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <p className="nav-link active fw-bolder" aria-current="page"> Welcome {user.name} ! </p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" aria-current="page" href="/admin">DASHBOARD</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='addproduct'>ADD PAINTINGS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='viewproduct'>VIEW PAINTINGS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='vieworders'>VIEW ORDERS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='allusers'>VIEW USERS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='profile'>PROFILE</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold" onClick={handleLogOut}>LOGOUT</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default AdminHeader
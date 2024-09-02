import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-5">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">ArtVista</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" aria-current="page" href="/home">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='register'>REGISTER</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='login'>LOG IN</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='aboutus'>ABOUT US</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to='contactus'>CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default HomeHeader
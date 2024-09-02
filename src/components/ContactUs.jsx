import React from 'react'

const ContactUs = () => {
  return (
    <div className='container mt-2 bg-light shadow mt-5 p-5'>
      <div className='fw-bolder'>Contact Us</div>
        <div className='row'>
            <div className='col p-5 col-md-12 col-lg-6 justify-content-center'>
                <div className='row'>
                <div className='fw-bolder fs-2'>ArtVista Gallery</div>
                <div className='p-3'>
                    <p className='mb-5'>
                    If you have any questions or concerns, please do not hesitate to contact us.
                    </p>
                    <div className='mb-5'><b>Email:</b> info@mail.com</div>
                    <div><b>Phone:</b> +91 9876543210</div>
                </div>
                </div>
            </div>
            <div className='col-md-12 col-lg-6 shadow bg-light border border-end d-flex justify-content-center align-items-center'>
              <img src="about.avif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs
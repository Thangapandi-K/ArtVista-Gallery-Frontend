import React from 'react'

const AboutUs = () => {
  return (
    <div className='container mt-2 bg-light shadow mt-5 p-5'>
      <div className='fw-bolder'>About Us</div>
        <div className='row'>
            <div className='col p-5 col-md-12 col-lg-6 justify-content-center'>
                <div className='row'>
                <div className='fw-bolder fs-2'>ArtVista Gallery</div>
                <div className=''>
                    <p className='p-3 lh-lg'>
                    ArtVista, a space for Indian Art and an Online Art Gallery presenting the most enchanting Indian Art Paintings. The Online Art Gallery collection includes creations by some of the best emerging and renowned artists of India. ArtVista was set up as a platform for young and established artists to showcase there artwork on global stage. Online Art Gallery and a Physical Space dealing in Indian Art and Indian Artist. ArtVista online art gallery currently boasts one of the widest collections of artwork including contemporary paintings and so much more.
                    </p>
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

export default AboutUs
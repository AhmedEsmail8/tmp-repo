import React from 'react'
import Headerline from './Headerline'

export default function About() {
  return (
    <section id="about" className='min-89vh section-bg d-flex flex-column justify-content-center align-items-center mt-70px row-gap-3'>
        <h1 className='text-uppercase fw-bolder m-0 p-0 text-white text-center'>about component</h1>
        <Headerline color='#fff'></Headerline>
        <div className='container w-75'>
            <div className="d-flex flex-column justify-content-center align-items-center text-white gap-3">
                <div className="row">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

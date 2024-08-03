import React, { useState } from 'react'
import Headerline from './Headerline'
import port1 from '../assets/images/port1.png'
import port2 from '../assets/images/port2.png'
import port3 from '../assets/images/port3.png'

export default function Portfolio() {

    let [overlayImg, setOverlayImg] = useState(null);

    function displayImg(e){
        const imgSrc = e.target.querySelector('img').src;
        setOverlayImg(imgSrc);
    }

    function closeOverlay() {
        setOverlayImg(null);
    }

  return (
    <section id="portfolio" className='min-89vh py-5 mt-70px mb-3'>
            <h1 className='fw-bolder text-uppercase text-center'>portfolio component</h1>
            <Headerline color='#2C3E50'></Headerline>
        <div className="container text-center">
            <div className="row gy-4 mt-1">
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card rounded overflow-hidden" onClick={displayImg}>
                        <img src={port1} alt="" className='w-100'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card rounded overflow-hidden" onClick={displayImg}>
                        <img src={port2} alt="" className='w-100'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card rounded overflow-hidden" onClick={displayImg}>
                        <img src={port3} alt="" className='w-100'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card rounded overflow-hidden" onClick={displayImg}>
                        <img src={port1} alt="" className='w-100'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card rounded overflow-hidden" onClick={displayImg}>
                        <img src={port2} alt="" className='w-100'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="portfolio-card rounded overflow-hidden" onClick={displayImg}>
                        <img src={port3} alt="" className='w-100'/>
                    </div>
                </div>
                
            </div>
        </div>
        {overlayImg && (
        <div className='img-overlay position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-primary bg-opacity-25' onClick={closeOverlay}>
          <img src={overlayImg} alt="" onClick={function(e){
            e.stopPropagation()
          }}/>
        </div>
      )}
    </section>
  )
}

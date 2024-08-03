import React from 'react'
import notFoundImg from '../assets/images/not-found.svg'

export default function Notfound() {
  return (
    <div className='d-flex justify-content-center align-items-center py-5 mt-5'>
      <div className="container">
        <img src={notFoundImg} alt="" className='w-75 d-block mx-auto'/>
      </div>
    </div>
  )
}

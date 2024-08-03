import React from 'react'

export default function Headerline({color}) {
  return (
    <div className='d-flex align-items-center justify-content-center gap-3'>
        <div className="line" style={{backgroundColor: color}}></div>
        <i className='fa-solid fa-star' style={{color: color}}></i>
        <div className="line" style={{backgroundColor: color}}></div>
    </div>
  )
}

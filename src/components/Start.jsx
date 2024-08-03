import React from 'react'
import avatar from '../assets/images/avataaars.svg'
import Headerline from './Headerline'

export default function Start() {
  return (
    <section id='start' className='d-flex justify-content-center align-items-center flex-column text-white gap-3 min-89vh mt-70px section-bg'>
      <img src={avatar}  width={250} alt="avatar" />
      <h1  className='text-uppercase fw-bolder m-0 p-0'>start Framework</h1>
      <Headerline color={'#fff'}></Headerline>
      <p className='m-0 p-0'>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  )
}

import React from 'react'
import Headerline from './Headerline'
import { useFormik } from 'formik'
import { error } from 'jquery';

export default function Contact() {

    function handleForm(values){
        console.log(values);
        formik.resetForm();
    }

    function validateForm(values){
        let errors = {};
        if (!values.userName)
            errors.userName = 'username required!';
        else if (!/^[a-zA-Z][a-zA-Z0-9._]{2,15}$/.test(values.userName))
            errors.userName = 'username is not valid!';

        if (!values.userAge)
            errors.userAge = 'Age required!'
        else if (+values.userAge < 15 || +values.userAge >= 100)
            errors.userAge = 'Age should be between 15 and 100 !'

        if (!values.userEmail)
            errors.userEmail = 'Email required!';
        else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.userEmail))
            errors.userEmail = 'Email not valid!';

        if (!values.userPassword)
            errors.userPassword = 'Password required!';

        return errors;
    }

    let formik = new useFormik({
        initialValues: {
            userName: '',
            userAge: '',
            userEmail: '',
            userPassword: ''
        },
        validate: validateForm,
        onSubmit: handleForm
    })

  return (
    <section id="contact" className='mt-70px'>
        <h1 className='fw-bolder text-uppercase text-center'>contact section</h1>
        <Headerline color='#2C3E50'></Headerline>
        <div className="contact-form-container px-4 mx-auto mt-5">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-4">
                    <input type="text"
                        className="form-control border-0 border-bottom"
                        id="userName"
                        name='userName'
                        placeholder="name@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="userName">userName</label>
                </div>
                {formik.errors.userName && formik.touched.userName ? <Alert message={formik.errors.userName}></Alert> : ''}
                <div className="form-floating mb-4">
                    <input type="number" 
                        className="form-control border-0 border-bottom" 
                        id="userAge" 
                        name='userAge' 
                        placeholder="name@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.userAge}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="userAge">userAge</label>
                </div>
                {formik.errors.userAge && formik.touched.userAge ? <Alert message={formik.errors.userAge}></Alert> : ''}
                <div className="form-floating mb-4">
                    <input type="email" 
                        className="form-control border-0 border-bottom" 
                        id="userEmail" 
                        name='userEmail' 
                        placeholder="name@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.userEmail}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="userEmail">userEmail</label>
                </div>
                {formik.errors.userEmail && formik.touched.userEmail ? <Alert message={formik.errors.userEmail}></Alert> : ''}
                <div className="form-floating mb-4">
                    <input type="password" 
                        className="form-control border-0 border-bottom" 
                        id="userPassword" 
                        name='userPassword' 
                        placeholder="name@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.userPassword}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="userPassword">userPassword</label>
                </div>
                {formik.errors.userPassword && formik.touched.userPassword ? <Alert message={formik.errors.userPassword}></Alert> : ''}
                <button type='submit' className='btn text-white section-bg w-fit-content'>send Message</button>
            </form>

        </div>
    </section>
  )
}


function Alert({message}){
    return (
        <div className='w-100 alert alert-danger border-danger p-3 reounded d-flex justify-content-center align-items-center'>
            <span>{message}</span>
        </div>
    )
}
import React from 'react'
import { NavLink } from 'react-router'

const Register = () => {
  return (
    <div className="container py-5">
      <div className='mx-5'>
        <h2>Create an acccount</h2>
        <p>Creating an account is easy. Just fill in the form below and enjoy the benefits of having an account.</p>
        <form className='my-5'>
          <div className='mb-3'>
            <label for='exampleInputName' className='form-label'>Name</label>
            <input type='text' className='form-control' id='exampleInputName' />
          </div>
          <div className='mb-3'>
            <label for='exampleInputEmail1' className='form-label'>Email address</label>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
          </div>
          <div className='mb-3'>
            <label for='exampleInputPassword1' className='form-label'>Password</label>
            <input type='password' className='form-control' id='exampleInputPassword1' />
          </div>
          <div className='mb-3'>
            <label for='exampleInputPassword2' className='form-label'>Confirm Password</label>
            <input type='password' className='form-control' id='exampleInputPassword2' />
          </div>
          <div className='mb-3 form-check d-flex justify-content-between'>
            <div>
              <input type='checkbox' className='form-check-input' id='exampleCheck1' />
              <label className='form-check-label' for='exampleCheck1'>I agree to the terms and conditions</label>
            </div>
            <div>
              <a href=''><NavLink to={'/Login'}>Already have account?</NavLink></a>
            </div>
          </div>
          <button type='submit' className='btn btn-dark'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register
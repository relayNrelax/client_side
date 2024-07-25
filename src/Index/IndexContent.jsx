import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
import logo2 from '../assets/png/logo.png'


function IndexContent() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/register');
    };

    const handleSignInClick = () => {
        navigate('/login');
    };
  return (
    <div className='container my-5'>
        <img src={logo2} className='rounded mx-auto d-block logoImg1' alt='img'/>
        <p class="text-center mt-3 fs-2">Rely on us and Relax ..</p>
        <p class="text-center fw-normal my-2 fs-6 mt-4"> Welcome to <b>Rely N Relax</b>. The platform that provides you
          reminder for the important dates like vehicle's <br></br> <span className='urlLink mt-3'> <b>PUCC</b> expiry,
          <b>Fitness</b> expiry, <b>RC</b> expiry and many more <b>....</b> </span> </p>

        <div class="container text-center my-3 py-5">
            <div class="d-grid gap-2 d-md-block reg_btn_cont">
                <button type="button" class="btn btn-lg reg_btn shadow-sm" onClick={handleSignUpClick}>Sign Up For Free</button>
                <span className='fs-5 ms-2 me-2'> or </span>
                <button type="button" class="btn btn-lg  reg_btn2 shadow-sm" onClick={handleSignInClick}>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default IndexContent
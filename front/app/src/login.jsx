
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
      email : '',
      password : ''
    })
  
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) =>{
      event.preventDefault();
      // const postdata = await 
      axios.post("http://localhost:8080/login", values)

    //   console.log("postdata",postdata)
    //   if(postdata.data.status==="Suscess"){
    //     navigate('/')
    //   }
    // }
      .then(res => {
        if (res.data.Status ==="Success") {
          navigate('/')
        }
        else {
          alert(res.data.Error);
        }
      })
      .then(err => console.log(err));
    }

  return (
    <div className='d-flex justify-content-center align-items-center-bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2><strong>SIGN IN</strong></h2>
        <form onSubmit={handleSubmit}>
           <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter your email' name='email' onChange={e=> setValues({...values, email : e.target.value})} className='form-control rounded-0' />
            </div>
            <div  className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter your password' name='password' onChange={e=> setValues({...values, password : e.target.value})}className='form-control rounded-0' />
            </div>
            <div>
                <button type='submit'className='btn btn-success w-100 rounded-0'>LOG IN</button>
                <p>You agree to our terms and condition</p>
                <Link to="/registration" className='btn btn-default border w-100 bg-light rounded-0'>Create Account</Link>

            </div>
        </form>
        </div>
    </div>
  )
}

export default Login
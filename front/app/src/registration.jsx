import  React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Registration() {
  const [values, setValues] = useState({
    name : '',
    email : '',
    password : ''
  })
const navigate = useNavigate()
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8080/registration',values)
    .then(res => {
      if (res.data.Status ==="Success") {
        navigate('/login')
      }
    })
    .then(err => console.log(err));
  }


  return (
    <div className='d-flex justify-content-center align-items-center-bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="Name"><strong>Name</strong></label>
            <input type="text" placeholder='your full name pls' name='Name' onChange={e=> setValues({...values, name : e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
          <label htmlFor="email"><strong>Email_ID</strong></label>
            <input type="email" placeholder='Enter your email' name='email' onChange={e=> setValues({...values, email : e.target.value})} className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
          <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Create password' name='password' onChange={e=> setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
          </div>
          <button type='submit'className='btn btn-success w-100 rounded-0'>SIGN UP</button>
          <p>You agree to our terms and condition</p>
          <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 '>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Registration

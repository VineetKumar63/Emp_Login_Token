import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage]= useState('')
  const [name,setName] = useState('')
  axios.defaults.withCredentials=true;


  useEffect(()=>{
    axios.get('http://localhost:8080')
    .then(res => {
      if (res.data.Status ==="Success") {
        setAuth(true)
        setName(res.data.name)
      }
      else {
        setAuth(false)
        setMessage(res.data.Error)
      }
    })
     .catch(err => console.log(err));
  },[])

  const handleDelete = () =>{
    axios.get('http://localhost:8080/logout')
    .then (res => {
      window.location.reload(true);

    }).catch(err => console.log(err));
  }
  return (
    <div className='container mt-4'>
      {
       auth ?
       <div>
        <h3> You are Authorized---{name}</h3>
        <button className='btn btn-danger' onClick={handleDelete}>Logout</button>
       </div>
       :
       <div>
          <h1>{message}</h1>
          <h3>Log IN now</h3>
          <Link to="/login" className='btn btn-primary' >Log In</Link>
       </div>
      }
    </div> 
  )
}

export default Home
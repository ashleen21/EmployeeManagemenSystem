import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setvalues]= useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = True;
    const handleSubmit=(event) =>{
        event.preventDefault()
        axios.post('http://localhost:5173//auth/adminlogin', values)
        .then(result => {
          if(result.data.loginStatus){
            Navigate('/home')
          }else{
            setError(result.data.Error)

          }
       


        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'> 
           <div className='text_danger'>
            {error && error}

           </div>
           <h2>Login </h2> 
           <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor='email'><strong>Email:</strong></label>
            <input type='email' name='email' autoComplete='off' placeholder='Enter Email'
             onChange={(e) =>setvalues({...values, email : e.target.value})} className='form-control rounded-0'/>
           </div>
           <div className='mb-3'> 
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' name='password' placeholder='Enter Password' 
             onChange={(e) =>setvalues({...values, password : e.target.value})}className='form-control rounded-0'/>
           </div>
           <button className='btn btn-success w-100 rounded-0'>Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login
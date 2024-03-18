import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loginUser, reset } from '../../features/auth/authSlice';
//bring app.css

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user, isSuccess } = useSelector((state)=>state.auth)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email,  password} = formData;

  useEffect(()=>{
    if(isSuccess){
      navigate('/dashboard');
      dispatch(reset());
  
  }
  })

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }));
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      
      email,
      password,
    };
    // Handle form submission logic here
    
    dispatch(loginUser(dataToSubmit));

  };
 
  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success all-hover">Login</button>
      </form>
    </div>
  );
}

export default Login;

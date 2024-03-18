import React, { useState, useEffect } from 'react';

import { registerUser, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user, isSuccess } = useSelector((state)=>state.auth)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    contact: '',
    password: '',
  });

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/login');
      dispatch(reset());
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [ isSuccess,user, dispatch, navigate])

  const {name, email, studentId, contact, password} = formData;

  //handle change
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
      name,
      email,
      studentId,
      contact,
      password,
    };
    // Handle form submission logic here
    
    dispatch(registerUser(dataToSubmit));

  };
 
  return (
    <div className="container mt-5">
      <h2 className="text-center">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">Student ID</label>
          <input type="text" className="form-control" id="studentId" name="studentId" value={studentId} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Mobile No.</label>
          <input type="text" className="form-control" id="contact" name="contact" value={contact} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Register;

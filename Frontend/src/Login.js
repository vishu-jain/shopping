import React from 'react';
import { useFormik } from 'formik';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5 ) {
    errors.password = 'Must be 5 characters or More';
  }else if (values.password.length > 8 ) {
    errors.password = 'Must be 8 characters or less';
  }
  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  let navigate=useNavigate();
      function sign(e){
        axios.post('http://localhost:8400/login',{
          email:formik.values.email,
          password:formik.values.password,
        })
        .then((res) => { 
          alert("Log In Successfully");
          navigate('/'); 
        })
        .catch((err) => {
          console.log(err);
        });
        e.preventDefault();
     }

   
  return (
    <><div className="ssbg"><img src="/images/bg1.jpg" alt="no "/></div>
    <div className="form-group mt-5">
    <form onSubmit={(e)=>{formik.handleSubmit();sign(e)}} className="container">
      <h2>Login</h2>
      <p style={{color:"dimgrey"}}>Please fill in this form to Login your account!</p>
      <hr/>
      {/* <label htmlFor="email">Email Address :</label> */}
      <input className="form-control"
        id="emailid"
        name="email"
        type="email"
        placeholder='Email Id'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="pp">{formik.errors.email}</p>
      ) : null}

      {/* <label htmlFor="password">Password :</label> */}
      <input className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder='Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <p className="pp">{formik.errors.password}</p>
      ) : null}
      <button type="submit" className="btn btn-primary my-4 ml-4">Submit</button>
      <p style={{textAlign:"center"}}>New User? <Link to="/signup">Sign Up here</Link></p>
    </form>
    </div>
    </>
  );
};
export default Login;
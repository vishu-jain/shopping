import React from 'react';
import { useFormik } from 'formik';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 5 ) {
    errors.firstName = 'Must be 5 characters or More';
  }else if (values.firstName.length > 25 ) {
    errors.firstName = 'Must be 25 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.length !== 10 ) {
    errors.password = 'Must be 10 Digit number';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5 ) {
    errors.password = 'Must be 5 characters or More';
  }else if (values.password.length > 8 ) {
    errors.password = 'Must be 8 characters or less';
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required';
  } else if (values.confirmpassword !== values.password ) {
    errors.password = 'Password and Confirm password value should be match';
  }
  return errors;
};

const Signupform = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
      password:'',
      confirmpassword:'',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  let navigate=useNavigate();
      function sign(e){
        e.preventDefault();
         axios.post('http://localhost:8400/postData',{
          firstName:formik.values.firstName,
          lastName:formik.values.lastName,
          email:formik.values.email,
          phone:formik.values.phone,
          password:formik.values.password,
          confirmpassword:formik.values.confirmpassword
        })
         .then((res) => { 
          console.log(res) 
          axios.post('http://localhost:8400/mail',{
          firstName:formik.values.firstName,
          lastName:formik.values.lastName,
          email:formik.values.email,
          phone:formik.values.phone,
          password:formik.values.password,
          confirmpassword:formik.values.confirmpassword
        })
         .then((res) => { console.log(res) })
         .catch((err) => {
           console.log(err);
         });
          navigate('/');
        })
         .catch((err) => {
           console.log(err);
         });
     }

   
  return (
    <><div className="ssbg"><img src="/images/bg1.jpg" alt="no "/></div>
    <div className="form-group">
    <form onSubmit={(e)=>{formik.handleSubmit();sign(e)}} className="container">
      <h2>Sign Up</h2>
      <p style={{color:"dimgrey"}}>Please fill in this form to create your account!</p>
      <hr/>
      {/* <label htmlFor="firstName">First Name :</label> */}
    <div className='row ml-1'>
      <input className="form-control"
        id="firstName"
        style={{width:"220px"}}
        name="firstName"
        type="text"
        placeholder='First Name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <p className="pp">{formik.errors.firstName}</p>
      ) : null}
      {/* <label htmlFor="lastName">Last Name :</label> */}
      <input className="form-control ml-5"
        id="lastName"
        style={{width:"220px"}}
        name="lastName"
        placeholder='Last Name'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <p className="pp">{formik.errors.lastName}</p>
      ) : null}</div>

      {/* <label htmlFor="email">Email Address :</label> */}
      <input className="form-control"
        id="email"
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

{/* <label htmlFor="phone">Phone no :</label> */}
      <input className="form-control"
        id="phone"
        name="phone"
        type="number"
        placeholder='Phone'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <p className="pp">{formik.errors.phone}</p>
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

       {/* <label htmlFor="confirmpassword">Confirm Password:</label> */}
      <input className="form-control"
        id="confirmpassword"
        name="confirmpassword"
        type="password"
        placeholder='Confirm Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmpassword}
      />
      {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
        <p className="pp">{formik.errors.confirmpassword}</p>
      ) : null}
      <button type="submit" className="btn btn-primary my-4 ml-4">Submit</button>
      <p style={{textAlign:"center"}}>Already have an account? <Link to="/login">Login here</Link></p>
    </form>
    </div>
    </>
  );
};
export default Signupform;
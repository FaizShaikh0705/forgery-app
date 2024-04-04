import React, { useState, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../../assets/forgery.png';
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  const handleFormSubmit = async (values, actions) => {
    try {
      login(dispatch, { email: values.email, password: values.password });
      // if (currentCart) {
      //     alert("You have login successfully");
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
      actions.setSubmitting(false);
    }
  }


  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <section className="auth py-4">
      <div className="authentication">
        <div className="container">
          <div className="text-center">
            <img src={logo} width="300" alt="icon" />
          </div>
          <div className="row justify-content-center">

            <div className="col-md-5 col-lg-5">
              <div className="mt-4 px-5 py-4 bg-white border shadow-lg rounded signup-box">
                <h2 className="text-center">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email('Invalid email').required('Email is required'),
                    password: Yup.string().required('Password is required')
                  })}
                  onSubmit={handleFormSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form> {/* Include Form component here */}
                      <div className="form-group mb-3">
                        <label htmlFor="email">Email address</label>
                        <Field type="text" className="form-control" id="email" name="email" placeholder="Enter an email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <Field type="password" className="form-control" id="password" name="password" placeholder="Enter a password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                      </div>
                      <div className="form-group text-center">
                        <Button type="submit" disabled={isSubmitting} variant='outline-dark'>
                          {isSubmitting ? 'Logging in...' : 'Login Now'}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="or py-3">
                  <h3><span>or</span></h3>
                </div>
                <div className="row pt-3">
                  <div className="col-lg-12 text-center">
                    <p class="text-center"> Don't have an account?  <a href="/signUp">Sign up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




  );

}

export default withRouter(Login);

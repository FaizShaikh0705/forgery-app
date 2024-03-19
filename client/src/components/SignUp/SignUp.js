import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";
import { withRouter, Redirect, Link } from 'react-router-dom';
import logo from '../../assets/forgery.png';
import './SignUp.css';


function SignUp(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);


  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
  };


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
                <h2 className="text-center">Sign Up</h2>
                {/* <div>{errorNotification}</div> */}
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" value={username} id="name" name="name" placeholder="Enter a name" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="text" className="form-control" value={email} id="email" name="email" placeholder="Enter a email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" value={password} id="password" name="password" placeholder="Enter a password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="form-group">
                  <button onClick={handleClick} className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign up Now</button>
                </div>
                <div className="or py-3">
                  <h3><span>or</span></h3>
                </div>
                <div className="row pt-3">
                  <div className="col-lg-12 text-center">
                    <p class="text-center">Have an account? <Link to="/login">Log in</Link></p>
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

export default withRouter(SignUp);

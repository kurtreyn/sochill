import logo from '../images/logo-sochill.png';
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row custom-row landing-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <h1>soChill Network</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
          {/* <Signup /> */}
          <p>
            <Link to="/signup">sign up</Link>
          </p>

          <p>
            <Link to="/login">log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

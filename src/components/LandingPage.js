import logo from '../images/logo-sochill.png';
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';
import loginIcon from '../images/icon-login.png';
import signUpIcon from '../images/icon-signup.png';

const InitialDisplay = () => {
  return (
    <div className="landing-icon-container">
      <div>
        <img
          src={loginIcon}
          alt="login"
          data-option="login"
          onClick={selectOption}
        />
        login
      </div>
      <div>
        <img
          src={signUpIcon}
          alt="sign up"
          data-option="signup"
          onClick={selectOption}
        />
        sign up
      </div>
    </div>
  );
};

function selectOption(e) {
  let selection = '';
  if (e.target.dataset === 'login') {
    selection = <Login />;
  } else if (e.target.dataset === 'signup') {
    selection = <Signup />;
  } else {
    selection = <InitialDisplay />;
  }
}

export default function LandingPage(selection) {
  return (
    <div className="container-fluid">
      <div className="row custom-row landing-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <h1>soChill Network</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
          {/* <Signup /> */}
          {selection}
        </div>
      </div>
    </div>
  );
}

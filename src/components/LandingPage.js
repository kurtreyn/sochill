import logo from '../images/logo-sochill.png';
import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';
import LandingOptions from './LandingOptions';
import SelectLanding from './SelectLanding';

export default function LandingPage() {
  const [initLand, setLand] = useState(<LandingOptions />);
  const buttons = document.querySelectorAll('[data-option]');

  function changeLand(e) {
    const selection = e.target.getAttribute('data-option');
    if (selection === 'login') {
      console.log(selection);
      setLand(<Login />);
    } else if (selection === 'signup') {
      console.log(selection);
      // setLand(<Signup />);
    } else {
      // setLand(<LandingOptions />);
    }
  }

  for (const btn of buttons) {
    btn.addEventListener('click', changeLand);
  }

  return (
    <div className="container-fluid">
      <div className="row custom-row landing-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <h1>soChill Network</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
          {initLand}
        </div>
      </div>
    </div>
  );
}

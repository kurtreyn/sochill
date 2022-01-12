import logo from '../images/logo-sochill.png';
import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';
import LandingOptions from './LandingOptions';
import SelectLanding from './SelectLanding';

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row custom-row landing-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
          <h1>soChill Network</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
          <SelectLanding />
        </div>
      </div>
    </div>
  );
}

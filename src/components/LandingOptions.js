import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import loginIcon from '../images/icon-login.png';
import signUpIcon from '../images/icon-signup.png';

export default function LandingOptions(props) {
  return (
    <div className="landing-icon-container">
      <div>
        <ul>
          <li>
            {' '}
            <img
              src={loginIcon}
              alt="login"
              data-option="login"
              onClick={props.changeLand}
            />
          </li>
          <li> login</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            {' '}
            <img
              src={signUpIcon}
              alt="sign up"
              data-option="signup"
              onClick={props.changeLand}
            />
          </li>
          <li>sign up</li>
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import loginIcon from '../images/icon-login.png';
import signUpIcon from '../images/icon-signup.png';

export default function LandingPage(props) {
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
              onClick={props.selectOption}
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
              onClick={props.selectOption}
            />
          </li>
          <li>sign up</li>
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginIcon from '../images/icon-login.png';
import signUpIcon from '../images/icon-signup.png';
import Signup from './Signup';
import Login from './Login';

export default function LandingPage(props) {
  const selectOption = (e) => {
    let selected = e.target.getAttribute('data-option');
    console.log(selected);
    if (selected === 'login') {
      console.log('props login');
      props.changeSelection(<Login />);
    }
    if (props.selected === 'signup') {
    }
  };
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
              onClick={selectOption}
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
              onClick={selectOption}
            />
          </li>
          <li>sign up</li>
        </ul>
      </div>
    </div>
  );
}

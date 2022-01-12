import React, { useState } from 'react';
import loginIcon from '../images/icon-login.png';
import signUpIcon from '../images/icon-signup.png';

export default function LandingOptions() {
  // const [selection, changeSelection] = useState(<LandingOptions />);
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
              // onClick={changeSelection}
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
              // onClick={changeSelection}
            />
          </li>
          <li>sign up</li>
        </ul>
      </div>
    </div>
  );
}

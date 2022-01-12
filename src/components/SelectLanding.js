import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import LandingOptions from './LandingOptions';

export default function SelectLanding() {
  const [initLand, setLand] = useState(<LandingOptions />);
  const button = document.querySelectorAll('[data-option]');

  function changeLand(e) {
    const selection = e.target.getAttribute('data-option');
    if (selection === 'login') {
      console.log('click');
      setLand(<Login />);
    } else if (selection === 'signup') {
      setLand(<Signup />);
    } else {
      setLand(<LandingOptions />);
    }
  }

  for (const btn of button) {
    btn.addEventListener('click', changeLand);
  }

  return <div>{initLand}</div>;
}

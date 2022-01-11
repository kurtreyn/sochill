import React from 'react';
import loginIcon from '../images/icon-login.png';
import signUpIcon from '../images/icon-signup.png';

export default function SideDock() {
  return (
    <>
      <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2 side-dock-col">
        <img src={loginIcon} alt="image" />
        <img src={signUpIcon} alt="image" />
        <img src={loginIcon} alt="image" />
        <img src={signUpIcon} alt="image" />
        <img src={loginIcon} alt="image" />
        <img src={signUpIcon} alt="image" />
      </div>
    </>
  );
}

import logo from '../images/logo-sochill.png';
import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';
import LandingOptions from './LandingOptions';
import RenderLandingPage from './RenderLandingPage';

export default function LandingPage() {
  const [selection, changeSelection] = useState(<LandingOptions />);

  // function selectOption(e) {
  //   let selected = e.target.getAttribute('data-option');
  //   console.log(selected);
  //   if (selected === 'login') {
  //     this.state.changeSelection(<Login />);
  //   }
  // }

  return <RenderLandingPage selection={selection} />;
}

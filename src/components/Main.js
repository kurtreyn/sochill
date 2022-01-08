import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import { AuthProvider } from '../contexts/AuthContext';

export default function Main() {
  return (
    <div>
      <AuthProvider>
        <LandingPage />
      </AuthProvider>
    </div>
  );
}

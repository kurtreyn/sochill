import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Login /> */}
        {/* <LandingPage /> */}
      </AuthProvider>
    </div>
  );
}

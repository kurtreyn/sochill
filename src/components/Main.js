import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import LandingPage from './LandingPage';

export default function Main() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route exact path="" element={<Dashboard />} />
          </Route>
          <Route path="/update-profile" element={<PrivateRoute />}>
            <Route exact path="" element={<UpdateProfile />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

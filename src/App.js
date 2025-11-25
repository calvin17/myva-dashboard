import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Admin from './components/Admin';

export default () => {
  return (
    <div>
      <Routes path="/">
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

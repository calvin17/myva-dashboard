import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';

export default () => {
  return (
    <div>
      {/* <Routes path="/">
        <Route path="/" element={<Dashboard />} />
      </Routes> */}
      <Dashboard />
    </div>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile/index.jsx';
import Admin from './components/Admin/index.jsx';

// For microfrontend - no router, just render based on current path
const App = () => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path === '/profile') return <Profile />;
    if (path === '/admin') return <Admin />;
  }
  return <Dashboard />;
};

// Standalone app with router
const StandaloneApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;

// Only render when running standalone
if (document.getElementById('root')) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <StandaloneApp />
    </React.StrictMode>
  );
}
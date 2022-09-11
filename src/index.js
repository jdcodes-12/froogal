import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Routes
import DashboardRoute from './routes/dashboard-route';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';

// Components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginAndRegistrationRoute/>} />
      <Route path='/dashboard' element={<DashboardRoute/>} />

      {/* 404 Route */}
      <Route path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
      />
    </Routes>
  </BrowserRouter>
);

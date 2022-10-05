import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import DashboardRoute from './routes/dashboard-route';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';
import NotFound404 from './routes/404-route';
import UserSettingsRoute from './routes/user-settings-route';
import FinancialSettingsRoute from './routes/financial-settings-route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route  path='/' 
              element={
                <ChakraProvider>
                  <LoginAndRegistrationRoute />
                </ChakraProvider> 
              }
      />

      <Route path='/dashboard' 
             element={
              <ChakraProvider>
                <DashboardRoute />
              </ChakraProvider>
             } 
      />

      <Route  path="/financial-settings"
              element={
                <ChakraProvider>
                  <FinancialSettingsRoute />
                </ChakraProvider>
              }
      />

      <Route  path="/user-settings"
              element={
                <ChakraProvider>
                  <UserSettingsRoute />
                </ChakraProvider>
              }
      />

      {/* 404 Route */}
      <Route  path="*"
              element={
                <ChakraProvider>
                  <NotFound404 />
                </ChakraProvider>
              }
      />
    </Routes>
  </BrowserRouter>
);

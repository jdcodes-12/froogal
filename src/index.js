import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import DashboardRoute from './routes/dashboard-route';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';
import NotFound404 from './routes/404-route';

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

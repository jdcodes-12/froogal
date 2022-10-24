import React from 'react';
import ReactDOM from 'react-dom/client';

import CustomChakraTheme from './utils/chakra-ui/chakra-theme-token-overrides';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

import DashboardRoute from './routes/dashboard-route';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';
import NotFound404 from './routes/404-route';
// import UserSettingsRoute from './routes/user-settings-route';
// import FinancialSettingsRoute from './routes/financial-settings-route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route  path='/' 
              element={
                <ChakraProvider theme={CustomChakraTheme}>
                  <LoginAndRegistrationRoute />
                </ChakraProvider> 
              }
      />

      <Route path='/dashboard' 
             element={
              <ChakraProvider theme={CustomChakraTheme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 
                <DashboardRoute />
              </ChakraProvider>
             } 
      />

      {/* <Route  path="/financial-settings"
              element={
                <ChakraProvider theme={CustomChakraTheme}>
                  <FinancialSettingsRoute />
                </ChakraProvider>
              }
      /> */}

      {/* <Route  path="/user-settings"
              element={
                <ChakraProvider theme={CustomChakraTheme}>
                  <UserSettingsRoute />
                </ChakraProvider>
              }
      /> */}

      {/* 404 Route */}
      <Route  path="*"
              element={
                <ChakraProvider theme={CustomChakraTheme}>
                  <NotFound404 />
                </ChakraProvider>
              }
      />
    </Routes>
  </BrowserRouter>
);

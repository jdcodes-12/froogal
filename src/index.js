import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import CustomChakraTheme from './utils/chakra-ui/theme/theme-entry';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

import DashboardRoute from './routes/dashboard-route';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';
import NotFound404 from './routes/404-route';
import { AuthContextProvider, AuthContext } from './components/context/authContext';

import '@fontsource/pavanam';
import '@fontsource/noto-sans';
import '@fontsource/lato';
import '@fontsource/koh-santepheap';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/" />
    }

    const SignedIn = ({ children }) => {
        return currentUser ? <Navigate to="/dashboard" /> : children
    }

    const { currentUser } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={
                        <SignedIn>
                            <ChakraProvider theme={CustomChakraTheme}>
                                <ColorModeScript initialColorMode={CustomChakraTheme.config.initialColorMode} />
                                <LoginAndRegistrationRoute />
                            </ChakraProvider>
                        </SignedIn>
                    } />
                    <Route path='dashboard'
                        element={
                            <RequireAuth>
                                <ChakraProvider theme={CustomChakraTheme}>
                                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                                    <DashboardRoute />
                                </ChakraProvider>
                            </RequireAuth>
                        }
                    />
                    {/* 404 Route */}
                    <Route path='*'
                        element={
                            <ChakraProvider theme={CustomChakraTheme}>
                                <NotFound404 />
                            </ChakraProvider>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);

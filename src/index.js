import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import CustomChakraTheme from './utils/chakra-ui/theme/theme-entry';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

import DashboardRoute from './routes/dashboard-route';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';
import NotFound404 from './routes/404-route';
import { AuthContextProvider, AuthContext } from './components/context/authContext';

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
                <Route path='/'
                    element={
                        <ChakraProvider theme={CustomChakraTheme}>
                            <ColorModeScript initialColorMode={CustomChakraTheme.config.initialColorMode} />
                            <SignedIn>
                                <LoginAndRegistrationRoute />
                            </SignedIn>
                        </ChakraProvider>
                    }
                />

                <Route path='/dashboard'
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
                <Route path='/404'
                    element={
                        <ChakraProvider theme={CustomChakraTheme}>
                            <NotFound404 />
                        </ChakraProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);

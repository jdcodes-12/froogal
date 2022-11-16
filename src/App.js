import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './components/context/authContext';
import LoginAndRegistrationRoute from './routes/login-and-registration-route';
import DashboardRoute from './routes/dashboard-route';
import NotFound404 from './routes/404-route';

import CustomChakraTheme from './utils/chakra-ui/theme/theme-entry';
import { 
  ChakraProvider, 
  ColorModeScript, 
  theme 
} from '@chakra-ui/react';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => currentUser ? children : <Navigate to="/" />
  
  const SignedIn = ({ children }) => currentUser ? <Navigate to="/dashboard" /> : children
  
  return (
    <Routes>
      <Route path='/'>
        <Route index element={
          (
            <SignedIn>
              <ChakraProvider theme={CustomChakraTheme}>
                <ColorModeScript initialColorMode={CustomChakraTheme.config.initialColorMode} />
                <LoginAndRegistrationRoute />
              </ChakraProvider>
            </SignedIn>
          )} 
        />
          
        <Route path='dashboard' element={
          (
          <RequireAuth>
            <ChakraProvider theme={CustomChakraTheme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <DashboardRoute />
            </ChakraProvider>
          </RequireAuth>
          )}
        />

        <Route path='*' element={
          (
            <ChakraProvider theme={CustomChakraTheme}>
              <NotFound404 />
            </ChakraProvider>
          )}
        />
      </Route>
    </Routes>
  );
}

export default App;
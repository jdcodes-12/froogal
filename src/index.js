import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './components/context/authContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <BrowserRouter>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
 </BrowserRouter>
);

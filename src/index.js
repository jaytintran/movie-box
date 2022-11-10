import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './app/store';
import './index.css';
import ToggleColorMode from './utils/ToggleColorMode';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF1616', // Red
    },
    secondary: {
      main: '#ffcc80', // Another orange-ish color
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorMode theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>,
  </Provider>,
);

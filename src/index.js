import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './store/store'
import {Provider} from 'react-redux';
import store from "./store/store";
import './layouts/common/cgi-theme.scss'
import {ThemeProvider,createTheme } from "@mui/material";


const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = createTheme({
    palette: {
        mode:  'dark'
    },
});

root.render(
    <ThemeProvider theme={darkTheme}>
      <React.StrictMode>
         <Provider store={store}>
                <App />
         </Provider>
      </React.StrictMode>
    </ThemeProvider>

);

reportWebVitals();

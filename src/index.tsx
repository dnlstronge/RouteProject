import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from "./Store/store"
import './index.css';
import App from './App';
import Nav from './Components/Nav/Nav';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <Nav />
       <App />
    </Provider>
   
  </React.StrictMode>
);

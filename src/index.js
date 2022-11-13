import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './Screens/Router';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0kI7tx4Q_rVXNDxjDv_oH9THvnhwFrGo",
  authDomain: "e-commerce-react44.firebaseapp.com",
  projectId: "e-commerce-react44",
  storageBucket: "e-commerce-react44.appspot.com",
  messagingSenderId: "732067729144",
  appId: "1:732067729144:web:059d1e4f72ae5cd539b50d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

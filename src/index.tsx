
import React from 'react';
import ReactDOM from 'react-dom/client';

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './Avy.css';

import 'kit/styles/style.css';

import Avy from './Avy';
// import reportWebVitals from './reportWebVitals';

import ABClose from "./Basket/Components/Canvas/ButtonClose";
import ABProduct from "./Basket/Components/Canvas/ProductItem";
import ABFooter from "./Basket/Components/Canvas/FooterContent";

// require('bootstrap/js/src/offcanvas');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Avy />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

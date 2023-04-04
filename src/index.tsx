
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'
import './AvyBasket.css';

import AvyBasket from './AvyBasket';
import reportWebVitals from './reportWebVitals';

require('bootstrap/js/src/offcanvas');


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <button className="btn btn-primary" onClick={() => {
            console.log('123');
        }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasket"
                aria-controls="offcanvasBasket">
            Добавить в корзину
        </button>
        <AvyBasket api={'/'} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

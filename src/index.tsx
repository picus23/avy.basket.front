import React from 'react';
import ReactDOM from 'react-dom/client';

import 'kit/styles/style.css';

import Avy from './Avy';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Avy />
    </React.StrictMode>
);

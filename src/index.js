import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const element = <h1>Hello world</h1>
// const element2 = React.createElement('h1', null, 'Hello world')
// console.log(element)
// console.log(element2)

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 
);

import React from 'react';
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo = "Hola, soy Adrián" /> , divRoot);
ReactDOM.render(<CounterApp numero = {200} /> , divRoot);
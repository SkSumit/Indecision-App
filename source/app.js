
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss'
import 'normalize.css/normalize.css'



console.log("Running from script");
var appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, appRoot);

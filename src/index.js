import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCard from './MediaCard.js'
import Gate from './Gate.js'
import StatePractice from './StatePractice.js'
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MediaCard title = "Just Media" body = "<Here, all the news goes!>" imageUrl = "./Images/Untitled.jpg"></MediaCard>
    <br></br>
    <Gate isOpen = {true}></Gate>
    <br></br>
    <StatePractice></StatePractice>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

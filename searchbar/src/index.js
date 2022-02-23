import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent'
import Header from './components/Header'
ReactDOM.render(
  <div>
   <Header/> 
   <MainComponent></MainComponent>
  </div>
  ,document.getElementById('root')
);
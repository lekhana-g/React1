import React from 'react';
import ReactDOM from 'react-dom';
import FlightList from './components/FlightList' 
import App from './components/Priceapi'
import FlightPost from './components/FlightPost'
import HooksCrud from './components/HooksCrud'

ReactDOM.render(
  <div>
     {/* <App apiUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC"></App>
        <App apiUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI"></App>
        <App apiUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC"></App>
  <FlightList/>
   <FlightPost/>*/}
     <HooksCrud/>
  </div>
  ,document.getElementById('root')
);



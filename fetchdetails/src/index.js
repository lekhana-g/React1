import React from 'react';
import ReactDOM from 'react-dom';
import FlightList from './components/FlightList' 
import Priceapi from './components/Priceapi'
import FlightPost from './components/FlightPost'

ReactDOM.render(
  <div>
        <Priceapi/>
   <FlightList/>
   {/*<FlightPost/>*/}

  </div>
  ,document.getElementById('root')
);



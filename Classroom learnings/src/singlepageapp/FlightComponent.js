import React, { Component } from 'react'
import axios from "axios"
import {useState,useEffect} from 'react'
import {BrowserRouter, Route , Link} from 'react-router-dom';
import FlightDetails from "../components/FlightDetails"
export class FlightComponent extends Component {
    constructor() {
        super();
        this.state = {
            userName: "Lekhana"
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                    <AddFlight></AddFlight>
                   <GetFlightsComponent></GetFlightsComponent>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
 function GetFlightsComponent(){
    var[flight,setFlight]=useState([]);

    useEffect(() => {
        GetFlights();
    })

    function GetFlights(){
        var dataPromise = axios.get("https://localhost:5001/api/Flight");
        dataPromise.then((response) => {
            setFlight(response.data);
        })
    }
   
    function DeleteFlight(event){
        axios.delete("https://localhost:5001/api/Flight/" + event.target.id).then(() => {
            alert("Flight Deleted");
            GetFlights();
        })
    }

    function UpdateFlight(event){
        
    }
    return(
       <div>
           <h1>Flight list:-</h1>
                {flight.map((flights)=> {
                    return  <FlightDetails key={flights.fid} {...flights} DeleteFlight={DeleteFlight}{...flights} UpdateFlight={UpdateFlight}{...flights} ></FlightDetails>
                })}
       </div>
    )


 }
 function AddFlight(){
     return(
         <div>
             <button>Add Flight</button>
         </div>
     )
 }

export default FlightComponent

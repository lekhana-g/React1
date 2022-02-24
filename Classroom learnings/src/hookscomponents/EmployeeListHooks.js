import React from 'react'
import axios from "axios"
import {useState,useEffect} from 'react'
import FlightDetails from "../components/FlightDetails"
function EmployeeListHooks() {
    var[flight,setFlight]=useState([]);
    useEffect(() => {
        var dp=axios.get("https://localhost:5001/api/Flight")
        dp.then((res)=>{
            setFlight(res.data);
        })
    })
    return (
        <div>
                <h1>Flight list:-</h1>
                {flight.map((flights)=> {
                    return  <FlightDetails key={flights.fid} {...flights} ></FlightDetails>
                })}
        </div>
    )
}

export default EmployeeListHooks

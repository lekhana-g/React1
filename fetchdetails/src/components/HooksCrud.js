import React from 'react'
import axios from "axios"
import {useState,useEffect} from 'react'
import FlightDetails from "../FlightDetails"
function Hookscrud() {
    var[flight,setFlight]=useState([]);

    useEffect(() => {
        var dp=axios.get("https://localhost:5001/api/Flight")
        dp.then((res)=>{
            setFlight(res.data);
        })
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

    var [fid,setFid]=useState(0);
    var [fname,setFname]=useState("");
    var [source,setSouce]=useState("");
    var [destination,setDestination]=useState("");
    var [departuretime,setDeptime]=useState("");
    var [arrivaltime,setArrtime]=useState("");
    var [totalcapacity,setTotalcap]=useState(0);
    var [costperseat,setCps]=useState(0);

    function AddEmployee(event){
        var data = {
            fid:fid,
            fname:fname,
            source:source,
            destination:destination,departuretime:departuretime,
            arrivaltime:arrivaltime,totalcapacity:totalcapacity,
            costperseat:costperseat
        };
    axios.post("https://localhost:5001/api/Flight",data).then((response) => {
            alert("Flight is Added")
            GetFlights();
        })
    }
    

    return (
        <div>
               <h1>Flight list:-</h1>
                {flight.map((flights)=> {
                    return  <FlightDetails key={flights.fid} {...flights} DeleteFlight={DeleteFlight}{...flights} UpdateFlight={UpdateFlight} ></FlightDetails>
                })}
                <div>
                <form onSubmit={AddEmployee}>
                    <div>
                        <label>Enter Flight ID</label><br/>
                        <input type="number" name="fid" value={fid} onChange={(e)=> setFid(e.target.value)}/>
                        <br/>
                    </div>
                    <div>
                        <label>Enter Flight name</label><br/>
                        <input type="text" name="fname" value={fname} onChange={(e)=> setFname(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label>Enter source</label><br/>
                        <input type="text" name="source" value={source} onChange={(e)=> setSouce(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label>Enter destination</label><br/>
                        <input type="text" name="destination" value={destination} onChange={(e)=>setDestination(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label>Enter departure time</label><br/>
                        <input type="datetime-local" name="departuretime" value={departuretime} onChange={(e)=> setDeptime(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label>Enter arrival time</label><br/>
                        <input type="datetime-local" name="arrivaltime" value={arrivaltime} onChange={(e)=> setArrtime(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label>Enter total capacity</label><br/>
                        <input type="number" name="totalcapacity" value={totalcapacity} onChange={(e)=> setTotalcap(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label>Enter costperseat</label><br/>
                        <input type="number" name="costperseat" value={costperseat} onChange={(e)=> setCps(e.target.value)}/><br/>
                    </div>
                    <div>
                        <button type="submit">Add Flight</button>
                    </div>
                </form>
                </div>
               
        </div>
    )
}

export default Hookscrud
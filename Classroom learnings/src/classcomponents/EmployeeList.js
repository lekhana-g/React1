import React, { Component } from 'react'
import Axios  from "axios"
import FlightDetails from "../components/FlightDetails"

export class EmployeeList extends Component {
    constructor(){
        super();
        this.state={
            Flightlist:[]
        } 
    }
    render() {
        return (
            <div>
                <h1>Flight list:-</h1>
                {this.state.Flightlist.map((flights)=> {
                    return  <FlightDetails key={flights.fid} {...flights} deleteFlight={this.deleteFlight}></FlightDetails>
                })}
            </div>
        )
   
    }
    deleteFlight=(event)=>{
        Axios.delete("https://localhost:5001/api/Flight/"+event.target.fid).then(()=>{
            alert('Flight deleted');
            var dataPromise=Axios.get("https://localhost:5001/api/Flight")
        dataPromise.then((response) => {
            this.setState({
                Flightlist: response.data
            })
        })
        })
    }
    componentDidMount(){
        var dataPromise=Axios.get("https://localhost:5001/api/Flight")
        dataPromise.then((response) => {
            this.setState({
                Flightlist: response.data
            })
        })
    }
}
export default EmployeeList

import React, { Component } from 'react'
import axios from "axios"
//post details of flight to the api
class FlightPost extends Component {
    constructor(props){
        super(props);
        this.state={
            fid:'',fname:'',
            source:'',destination:'',
            departuretime:'',arrivaltime:'',
            totalcapacity:'',costperseat:''
        }
    }
    changeid = (event) => {
        this.setState({ fid: event.target.value })
    };
    changename = (event) => {
        this.setState({ fname: event.target.value })
    };
    changesource = (event) => {
        this.setState({ source: event.target.value })
    };
    changedestination = (event) => {
        this.setState({ destination: event.target.value })
    };
    changedeptime = (event) => {
        this.setState({ departuretime: event.target.value })
    };
    changearrtime=(event) =>{
        this.setState({arrivaltime:event.target.value})
    };
    changetc = (event) => {
        this.setState({ totalcapacity: event.target.value })
    };
    changecps = (event) => {
        this.setState({ costperseat: event.target.value })
    };

    submitHandler=(e)=>{
      const flightd={
          fid:this.state.fid,
          fname:this.state.fname,
          source:this.state.source,
          destination:this.state.destination,departuretime:this.state.departuretime,
          arrivaltime:this.state.arrivaltime,totalcapacity:this.state.totalcapacity,
          costperseat:this.state.costperseat
      }
      axios.post("https://localhost:5001/api/Flight",flightd).then(response=>console.log(response.data));
          alert('Flight details added');
      
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="number" name="fid" value={this.state.fid} onChange={this.changeid}/>
                    </div>
                    <div>
                        <input type="text" name="fname" value={this.state.fname} onChange={this.changename}/>
                    </div>
                    <div>
                        <input type="text" name="source" value={this.state.source} onChange={this.changesource}/>
                    </div>
                    <div>
                        <input type="text" name="destination" value={this.state.destination} onChange={this.changedestination}/>
                    </div>
                    <div>
                        <input type="datetime-local" name="departuretime" value={this.state.departuretime} onChange={this.changedeptime}/>
                    </div>
                    <div>
                        <input type="datetime-local" name="arrivaltime" value={this.state.arrivaltime} onChange={this.changearrtime}/>
                    </div>
                    <div>
                        <input type="number" name="totalcapacity" value={this.state.totalcapacity} onChange={this.changetc}/>
                    </div>
                    <div>
                        <input type="number" name="costperseat" value={this.state.costperseat} onChange={this.changecps}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FlightPost

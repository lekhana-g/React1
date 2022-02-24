import { Component } from "react";
import Name2 from './Name2'
export default class NameComponent extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
        }
    }
         changeName = (event) => {
             this.setState({
                 name : event.target.value
             })
         }
    render(){
        return (
            <div>
            <input type="text" onChange={this.changeName} />
            <h5>Name: {this.state.name} </h5>
            <Name2 name={this.state.name}></Name2>
            </div>
        )
    }

}
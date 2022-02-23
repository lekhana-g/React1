import React, { Component } from 'react'
import NameDetail from './Namedetails'

class MainComponent extends Component {
    constructor(){
        super();
        this.state={
            names:[
                'Lekhana',
                'Yasaswi',
                'Phani',
                'Bindu',
                'Pradeepthi',
                'Mithra',
                'Varun',
                'Sekhar',
                'Ameeth'
            ],
            inp:""
        }
    }
    SearchInput = (e) => {
        this.setState({inp: e.target.value})
      }
    
      SearchNow= () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.inp.toLowerCase()))
      }
    render() {
        return (
            <div style={{backgroundColor:'lightslategray'}}>
          <div className="ui form center" style = {{textAlign: 'center', paddingTop: '10vh'}}>
          <h4>Search for Name</h4>
          <input className="ui focus input" type= 'text' style={{width:'30%'}} value = {this.state.inp} onChange = {this.SearchInput} placeholder = 'Search Here!!'/>
          <br></br>
          <h3>Names:</h3>
         <NameDetail style={{width:'30%'}} names = {this.SearchNow()}/> 
        </div>
        </div>
        )
    }
}

export default MainComponent;


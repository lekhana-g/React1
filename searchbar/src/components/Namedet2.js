import React, { Component } from 'react'


export class Namedet2 extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#FFB6C1'}}>  
               <h4 style={{TextAlign:'left',border: 'black ridge 1px',borderRadius: '10px',margin: '3px',padding: '10px',display:'inline-block',width:'100px',backgroundColor:'skyblue',color:'black'}} >
                    {this.props.name} 
                </h4>
            </div>
        )
    }
}
export default Namedet2

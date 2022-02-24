import React, { Component } from 'react'
import Axios from "axios"

export class Priceapi extends Component {
    constructor() {
        super();
        this.state = {
            pricedata: {}
        }
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center',color:'lightslategray'}}>SBI Equity cash</h1><hr/>
                <div className="card center" style={{"padding":"10px","margin":"30px",width:'50%',align:'center'}}>
                    <div className="card-header">
                       <b>{this.state.pricedata.HN}</b><br/>
                       <b>{this.state.pricedata.SC_FULLNM}</b><br/>
                       <b>Sector:- {this.state.pricedata.DISPTYP}</b>
                       <br/><b> IFSC start id:- {this.state.pricedata.NSEID}</b>
                    </div>
                    <div className="card-text" style={{paddingInlineStart:'10px',padding:'15px'}}>
                        <b>Current Price: </b>{this.state.pricedata.pricecurrent}<br/>
                        <b> Previous Price : </b> {this.state.pricedata.priceprevclose}
                        <br/>
                        <b> Total sell Quantity : </b> {this.state.pricedata.tot_sell_qty}
                        <br/>
                        <b> Price change : </b> {this.state.pricedata.pricechange}
                        <br/>
                        <b> Price Percentage change(%) : </b> {this.state.pricedata.pricepercentchange}
                        <br/>
                        <b> Market cap: </b> {this.state.pricedata.MKTCAP}
                        <br/>
                    </div>

                    
                    </div>

            </div>
        )
    }
    componentDidMount(){
        setInterval(()=>{
        var dataPromise=Axios.get(this.props.apiUrl)
        dataPromise.then((response) => {
            this.setState({pricedata: response.data.data})
        })
    },1000);
    }
}

export default Priceapi

import React, { Component } from 'react'
import Axios  from "axios"
class ActivityComponent extends Component {
    constructor(){
        super();
        this.state={
            price:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Details:- {this.state.price.code}</h1>
               
            </div>
        )
    }
    componentDidMount(){
        var dataPromise=Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC")
        dataPromise.then((response) => {
            this.setState({
                price: response.data
            })
        })
    }
}

export default ActivityComponent

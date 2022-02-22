import React, { Component } from 'react'
import Namedet2 from './Namedet2'

class Namedetails extends Component {
    render() {
        return (
            <div>
                {/*HOC*/}
                 {this.props.names.map(name => <Namedet2 name = {name}/>)}
            </div>
        )
    }
}

export default Namedetails

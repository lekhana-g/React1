import React from 'react';
//these life cycle events are only used in class based components
//not used in functional components
export default class LifeCycle extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            name: "lekhana",
            counter: 1
        }
    }

    render() {
        debugger;
        return <h1>This is {this.state.name} with Counter: {this.state.counter}</h1>
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     debugger;
    //     if(nextState.counter % 3 === 0) {
    //         var result  = window.confirm("Do you want to continue! " + nextState.counter) 
    //         return result
    //     } else {
    //         return true;
    //     }
    // }
    componentDidUpdate() {
        debugger;
    }
    componentDidMount() {
        debugger;
        console.log("Component Mounted...")
        setInterval(() => {
            this.setState({
                name: "lekhana",
                counter: this.state.counter + 1
            })
        }, 1000)
    
    }
    componentWillUnmount() {
        // component is destroyed....
    }
}
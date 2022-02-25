import React from 'react';
import {BrowserRouter, Route , Link} from 'react-router-dom';
export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Lekhana"
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                   <div>
                      <HeaderComponent/>
                      <ContentComponent/>
                   </div>
                </BrowserRouter>
                <FooterComponent/>
            </div>
        )
    }
}
function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <Link style={{margin: "10px"}} to="/">Home</Link>
                <Link style={{margin: "10px"}} to="help">Help</Link>
                <Link style={{margin: "10px"}} to="about">About</Link>
            </nav>
        </div>
    )
}
function FooterComponent(){
   return <h3>Footer</h3>
}
function HomeComponent() {
    return <h3>This is Home Component</h3>
}

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}
function ContentComponent(){
    return (
        <div style={{border: "1px solid red", padding: "10px", margin: "10px", height: "400px"}}>
            <h2>This is Content Component</h2>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
        </div>
    )
}
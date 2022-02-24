import React,{useState,useContext} from 'react'
var AppContext = React.createContext()
function Hirerarchy() {
    var[V]=useState("ap");
    return (
        <AppContext.Provider value={V}>
            <h1>This is Grand Grand Parent - {V}</h1><hr/>
            <GrandParent></GrandParent>
        </AppContext.Provider>
    )
}

function GrandParent(props) {
    return (
        <div>
            <h1>Grand parent </h1>
            <Parent/>
        </div>
    )
}

function Parent(props) {
    return (
        <div>
            <h1>Parent</h1>
            <Children/>
        </div>
    )
}

function Children(props) {
    return (
        <div>
            <h1>children</h1>
            <GrandChildren/>
        </div>
    )
}

function GrandChildren(props) {
    var dataConsumer = useContext(AppContext);
    debugger;
    return (
        <div>
            <h1>This is Grand Children - {dataConsumer}</h1><hr/>
        </div>
    )
}


export default Hirerarchy


import React from 'react'
import {useState,useEffect} from 'react'
function UseStateCounter() {
    var[counter,setCounter]=useState(0);

    useEffect(() => {
        console.log("Hello!");
    })
    //independent - displayed on console for once
    useEffect(()=>{
        console.log("Hi")
    },[])
    
    setTimeout(()=>{
         setCounter(counter=counter+1);
    },1000);
    
    return (
        <div>
            <h1>Counter is: {counter}</h1>
        </div>
    )
}

export default UseStateCounter

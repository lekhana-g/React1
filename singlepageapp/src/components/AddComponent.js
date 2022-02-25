import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddComponent() {
    var [pid, setPid] = useState('');
    var [pname, setPName] = useState('');
    var [qty, setQty] = useState('');
    var [price,setPrice] = useState('');
    
    var AddProduct = (event) => {
        event.preventDefault();
        var data = {
            pid: pid,
            pname: pname,
            qty:qty,
            price:price
        };
        axios.post("https://localhost:5000/api/Product", data).then((response) => { }).catch((error) => { });
        alert("New Product Created !!");
        setPid("");setPName("");setQty("");setPrice("");
    }
    return (
        <div>
            <form onSubmit={AddProduct}>
                <div>
                    <label>Enter Product id:- </label>
                    <input type="number" placeholder="Enter pid" value={pid} onChange={(event)=>{setPid(event.target.value)}} required/><br/>
                </div>
                <div>
                    <label>Enter Product Name:- </label>
                    <input type="text" placeholder="Enter pname" value={pname} onChange={(event)=>{setPName(event.target.value)}} required/><br/>
                </div>
                <div>
                    <label>Enter Product quantity:- </label>
                    <input type="number" placeholder="Enter qty" value={qty} onChange={(event)=>{setQty(event.target.value)}}required/><br/>
                </div>
                <div>
                    <label>Enter Product price:- </label>
                    <input type="number" placeholder="Enter price" value={price} onChange={(event)=>{setPrice(event.target.value)}} required/><br/>
                </div>
                <button>
                    Add Product
                </button><br/>
                <hr/>
                <Link to='/'><a>Back to Product details</a></Link>
            </form>
        </div>
    )
}

export default AddComponent

import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddComponent() {
    //https://github.com/Mayankgupta688/FareportalReact/blob/master/React/employee-details/src/hooksImplementation/ObjectDataComponent.js
    //refer this
    var [pid, setPid] = useState('');
    var [pname, setPName] = useState('');
    var [qty, setQty] = useState('');
    var [price,setPrice] = useState('');
    
    var AddProduct = (event) => {
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
        <div className="row justify-content-center">
            <div className="col-md-4 col-md-offset-5 align-center">
            <h4 style={{textAlign:"center",paddingTop:"40px"}}>Add Product</h4>
            <form onSubmit={AddProduct}>
                <div>
                    <br/>
                    <b><label className="control label" style={{paddingRight:'50px'}}>Product id</label></b>
                    <input type="number" style={{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"}} placeholder="Enter Pid" value={pid} onChange={(event)=>{setPid(event.target.value)}} required/><br/><br/>
                </div>
                <div>
                    <b><label className="control label" style={{paddingRight:'24px'}}>Product Name</label></b>
                    <input type="text" style={{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"}} placeholder="Enter pname" value={pname} onChange={(event)=>{setPName(event.target.value)}} required/><br/><br/>
                </div>
                <div>
                    <b><label className="control label" style={{paddingRight:'10px'}}>Product quantity</label></b>
                    <input type="number" style={{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"}} placeholder="Enter qty" value={qty} onChange={(event)=>{setQty(event.target.value)}}required/><br/><br/>
                </div>
                <div>
                    <b><label  style={{paddingRight:'30px'}}>Product price</label></b>
                    <input type="number" style={{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"}} placeholder="Enter price" value={price} onChange={(event)=>{setPrice(event.target.value)}} required/><br/><br/>
                </div>
                <button className="btn btn-primary" style={{margin:"auto",display:"block"}}>Add Product</button><br/>
                <hr/>
                <Link to='/'>Back to Product details</Link>
            </form>
            </div>
        </div>
    )
}

export default AddComponent

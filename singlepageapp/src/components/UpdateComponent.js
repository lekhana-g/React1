import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"
import { useEffect } from "react"

function UpdateComponent() {
    let p=useParams();

    var [pid, setPid] = useState('');
    var [pname, setPName] = useState('');
    var [qty, setQty] = useState('');
    var [price,setPrice] = useState('');
 
    var FetchingID= () => {
        axios.get(`https://localhost:5000/api/Product/${p.pid}`)
        .then((res)=>{
            setPid(pid = res.data.pid);setPName(pname = res.data.pname);
            setQty(qty = res.data.qty);setPrice(price = res.data.price);
        });
    }

    useEffect(()=>{
        FetchingID();
    },[]);

    function UpdateProduct(event){
        var data = {
            pid: p.pid,
            pname: pname,
            qty:qty,
            price:price
        };
        axios.put(`https://localhost:5000/api/Product/${p.pid}`, data).then((res) => { console.log(res.data); }).catch((error) => { });
        alert("Product Details Updated !!");
        setPid("");setPName("");setQty("");setPrice("");
    }

    return (
        <div className="row justify-content-center">
        <div className="col-md-4 col-md-offset-5 align-center">
        <h4 style={{textAlign:"center",paddingTop:"40px"}}>Update Product</h4>
        <form onSubmit={UpdateProduct}>
            <div>
                <br/>
                <b><label className="control label" style={{paddingRight:'50px'}}>Product id</label></b>
                <input type="number" style={{padding:"12px",border:"1px solid #ccc",borderRadius:"4px"}}  value={pid} required readOnly/><br/><br/>
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
            <button className="btn btn-warning" style={{margin:"auto",display:"block"}}>Update Product</button><br/>
            <hr/>
            <Link to='/'>Back to Product details</Link>
        </form>
        </div>
    </div>
    )
}

export default UpdateComponent

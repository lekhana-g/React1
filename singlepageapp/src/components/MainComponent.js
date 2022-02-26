//to get the data
import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function MainComponent() {
    var [prod,setProd] = useState([]);

    useEffect(()=>{
        getProducts();
    });

    var getProducts = () => {
        axios.get("https://localhost:5000/api/Product").then((response)=>{ setProd( prod = response.data);})
    };

    var deleteProducts = (event) => {
        axios.delete("https://localhost:5000/api/Product/" + event.target.id).then(() => {
            alert("Product Deleted");
            getProducts();
        })
    }

    return (
        <div>
             <h4 style={{textAlign:"center",paddingTop:"40px"}}>Product details</h4>
             <hr/>
             <table className="table table-striped" style={{width:"600px",marginLeft:"auto",marginRight:"auto"}}>
                    <thead>
                        <tr>
                            <th>Product id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {prod.map((prods)=>{
                     return(
                        <tr>
                            <td>{prods.pid}</td>
                            <td>{prods.pname}</td>
                            <td>{prods.qty}</td>
                            <td>{prods.price}</td>
                            <td>
                            <Link to = {`/Update/${prods.pid}`} ><button className="btn btn-secondary">Edit</button></Link>
                            </td>
                            <td>
                            <button id={prods.pid} className="btn btn-danger" key={prods.pid} onClick={deleteProducts}>Delete</button>
                            </td>
                        </tr>
                    )
                        })}

                    </tbody>
                    </table>

             
        </div>
    )
}

export default MainComponent

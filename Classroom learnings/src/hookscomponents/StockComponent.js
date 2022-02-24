import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function StockComponent()
{
    var [stc, setStc] = useState(0);
    useEffect(() => {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC");
        dataPromise.then((res) => {
            setStc(res.data.data);
        })
    },[])

    return(
        <div>
            <p>Price:{stc.pricecurrent}</p>   
        </div>
    )
   
}

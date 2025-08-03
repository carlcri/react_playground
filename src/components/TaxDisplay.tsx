import React from "react";

interface TaxDisplayProps{
    tax: string;
    net_price: string;
    price: number;
    currency: string;
}

function TaxDisplay ({tax, net_price, price, currency}: TaxDisplayProps){

    return(
        <div>
            <h4>Detalle</h4>
            <p>Before tax: {price} {currency} </p>
            <p>Tax Amount: {tax} {currency}</p>
            <p>After tax: {net_price} {currency}</p>
        </div>
    );
}

export default TaxDisplay;
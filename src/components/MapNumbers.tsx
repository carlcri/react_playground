import React from "react";

function MapNumbers(){

    const saldo: number[] = [100, 150, 300];
    const debit: number[] = [25, 40, 10]

    const aux = saldo.map(function(elemento, index){
        return elemento-debit[index];
    })
    return(
        <div>
            <h4>{saldo}</h4>
            <h4>{debit}</h4>
            <h4>{aux}</h4>
        </div>
    );
}

export default MapNumbers;
/* eslint-disable react/prop-types */
//import React from "react";

import '../App.css';

const Partial = ({ nombre , peso = 0}) => {
    const calcularNota = (e) => {
      
        var nota = e.target.value;
        const result = peso * nota
        console.log(result)
        return result
    }
    return (
        <>
            <h3>
                {nombre} - {peso} %
            </h3>
            <label>Nota</label>
            <input type="number" onBlur={calcularNota}/>
        </>
    );
};

export default Partial
/* eslint-disable react/prop-types */
//import React from "react";
//import { useId } from "react";
import '../App.css';

const Partial = ({ nombre, peso = 0, mandarResultado, eliminarParcial, idParcial}) => {

    const calcularNota = (e) => {
        var nota = e.target.value;
        const result = (nota * peso)/100;
        console.log("desde el componente hijo:" + result);
        mandarResultado(result);
    };

    const quitarParcial = (e) => {
        var nota = e.target.value;
        eliminarParcial(idParcial, nota);
    }

    return (
        <>
            <h3>
                {nombre} - {peso} %
            </h3>
            <label>Nota</label>
            <input type="number" onBlur={calcularNota} />

            <button onClick={quitarParcial}>Eliminar</button>
            {console.log(idParcial)}
            
        </>
    );
};

export default Partial
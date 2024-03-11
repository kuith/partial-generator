/* eslint-disable react/prop-types */
//import React from "react";

import '../App.css';

const Partial = ({ nombre , peso=0 }) => {
    return (
        <>
            <div className="parcial">
                <p>
                    {nombre} - {peso} %
                </p>
                <p>Nota: </p>
            </div>
        </>
    );
};

export default Partial
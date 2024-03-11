/* eslint-disable react/prop-types */
//import React from "react";

import { useForm } from 'react-hook-form';
import '../App.css';

const PartialForm = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit= (data) => {
        console.log(data);
    }
    return (
        <>
            <div>
                <h3>Formulario Nuevo Parcial</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" {...register('nombre')} />
                    </div>
                    <div>
                        <label>Peso</label>
                        <input type="number" {...register('peso')} />
                    </div>
                    <input type='submit' value="enviar" />
                </form>
            </div>
        </>
    );
};

export default PartialForm
import { useEffect, useState} from 'react'
import './App.css'

import Partial from './components/partial';

function App() {
  const [componentes, setComponentes] = useState([]);
  const [porcentajeTotal, setPorcentajeTotal] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    peso: 0
  })

  useEffect(() =>{
    setPorcentajeTotal(sumaPorcentajes);
  }, [componentes]);
  
  const totalParciales = componentes.map( parcial => {
    return parcial.props.peso;
  });

  const sumaPorcentajes = totalParciales.reduce((prev, next) => Number(prev) + Number(next), 0);
   
  function handleSubmit(event) {
    event.preventDefault();
    if ((Number(formData.peso) + Number(porcentajeTotal)) <= 100) {
        //console.log(Number(formData.peso) + Number(porcentajeTotal));
        agregarComponente(formData.nombre, formData.peso, formData.nombre+formData.peso);
    } else {
      //console.log(Number(formData.peso) + Number(porcentajeTotal));
        alert("El porcentaje total excede el 100%");
    }
  }
  const calcularNotaParcial = (resultado) =>{
    //var notaInicial = e.target.value;
    console.log("desde el padre: " + resultado);
    //console.log("El peso es: " + "Y la nota parcial es: " + notaInicial);
  }

  const agregarComponente = (nombre, peso) => {
     const nuevoComponente = <Partial 
      nombre = {nombre} 
      peso = {peso} 
      calcularNota={calcularNotaParcial}
      />
    setComponentes([...componentes, nuevoComponente]);
  };

  const pintarComponentes  = componentes.map((componente, index) => { 
    return(
      <div  className="parcial" key={index}>
        {componente}
      </div>
  )})

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <input onChange={(e) => setFormData({...formData, nombre: e.target.value})} value={formData.nombre} type="text" placeholder="Nombre" />
        <input onChange={(e) => setFormData({...formData, peso: e.target.value})} value={formData.peso} type="number" placeholder="Peso" />
        <button type="submit">
          Aceptar
        </button>
      </form>
      
      {pintarComponentes}

    </>
  );
  
}

export default App

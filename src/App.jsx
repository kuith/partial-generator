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
  const [notaFinal, setNotaFinal] = useState(0);

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
      const idParcial = Math.random();
      agregarComponente(formData.nombre, formData.peso, idParcial);
    } else {
      alert("El porcentaje total excede el 100%");
    }
  }

  const incrementarNotaFinal = (resultado) =>{
    console.log("desde el padre a sumar: " + resultado);
    setNotaFinal(notaFinal + resultado);
  }

  const eliminarParcial = (idParcial, nota) => {
      console.log("desde el padre a restar: " + idParcial + "nota: " + nota);
      //primero resto la nota final acumulada
      //actualizo porcentajes totales
      //quito el componente del array
      //setNotaFinal(notaFinal - resultado);
  };

  const agregarComponente = (nombre, peso, idParcial) => {
      const nuevoComponente = (
          <Partial
              nombre={nombre}
              peso={peso}
              mandarResultado={incrementarNotaFinal}
              eliminarParcial={eliminarParcial}
              idParcial={idParcial}
          />
      );
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

      <div>
        <h3>Nota final</h3>
        <label>{notaFinal}</label>
      </div>

    </>
  );
  
}

export default App

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
    //aqui meto el comprobar el peso total
    //console.log(componentes);
     console.log(componentes);
     console.log(totalParciales);
     console.log(sumaPorcentajes);
     setPorcentajeTotal(sumaPorcentajes);
     console.log(porcentajeTotal);
  }, [componentes]);
  


  const totalParciales = componentes.map( parcial => {
    return parcial.props.peso;
  });

  const sumaPorcentajes = totalParciales.reduce((prev, next) => Number(prev) + Number(next), 0);
   
  function handleSubmit(event) {
    event.preventDefault();
    agregarComponente(formData.nombre, formData.peso)
  }

  const agregarComponente = (nombre, peso) => {
    // Crea un nuevo componente
    //const nuevoComponente = <MiComponente nombre = {nombre} peso = {peso}/>;
    const nuevoComponente = <Partial nombre = {nombre} peso = {peso}/>
    // Actualiza el estado con el nuevo componente
    setComponentes([...componentes, nuevoComponente]);
  };

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

      
      <div>
        {componentes.map((componente) => componente)}
      </div>
    </>
  );
  
}

export default App

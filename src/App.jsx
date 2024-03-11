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
    console.log(componentes)

  }, [componentes]);

  //const obtenerProcentajeTotal = componentes.reduce((prev, next)=>prev + next.peso)
  //console.log(obtenerProcentajeTotal);
/*   

  const listaVacia = Array.from({ length: 10 }).fill({});

  const lista = listaVacia.map(item => ({
   price: Math.floor(Math.random() * 100)
  }));
  
  console.log(lista);
  
  const sumaPrecios = lista.reduce((prev, next) => prev + next.price, 0);
  
  console.log(sumaPrecios) */


   
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

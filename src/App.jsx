import { json } from "react-router-dom";
import Formulario from "./components/Formulario";
import Header from "./components/header";
import Listapaciente from "./components/listaPaciente";
import {useState,useEffect} from "react";
function App() {
  const [pacientes, setPacientes] = useState([]);
const [paciente, setPaciente] = useState({});

useEffect(() => {
  const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS);
  };
  obtenerLS();
}, []);

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes));
}, [pacientes]);

  const eliminarPaciente=id=>{
       const pacienteActualizados=pacientes.filter(paciente=>paciente.id!==id);
       setPacientes(pacienteActualizados)
  }
  
  return (
   <div className="container mx-auto mt-20">
    <Header />
   <div className="mt-12  md:flex">
  
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          />
        <Listapaciente 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
   </div>
        
   </div>
  )
}

export default App

import { useEffect } from "react";
import Paciente from "./Paciente";

function Listapaciente({ pacientes, setPaciente,eliminarPaciente}) {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map(paciente => (
            <Paciente key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente}  
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Compienza Agregando Pacientes{' '}
             <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default Listapaciente;

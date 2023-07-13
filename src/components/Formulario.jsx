
import {useState,useEffect} from "react"
import Error from "./Error";
const Formulario = ({pacientes,setPacientes,paciente}) => {
  const [nombre, setnombre]=useState('');
  const [propietario, setpropietario]=useState('');
  const [email, setemail]=useState('');
  const [fecha, setFecha]=useState('');
  const [sintomas, setSintomas]=useState('');
  const [error,setError]=useState(false);
  useEffect(()=>{//escuchar por los cambios que sucedan 
         if(Object.keys(paciente).length>0) {  //de esta forma compruebo si un arreglo esta vacio o no 
             setnombre(paciente.nombre);
             setpropietario(paciente.propietario);
             setemail(paciente.email);
             setFecha(paciente.fecha);
             setSintomas(paciente.sintomas);         
         } 
         else{
          console.log("No hay nada");
         }
  },[paciente])//dependencias arreglo vacio
 
  const generarId=()=>{
     const random=Math.random().toString(36).substr(2);
     const fecha=Date.now().toString(36)
     return random+fecha;
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    //validacion del formulario 
    if([nombre,propietario,email,fecha,sintomas].includes('')){//metodo de arreglos
        setError(true);
        return;
    }
    setError(false);
    //Objecto de Paciente 
    const objectoPaciente={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id:generarId()
    }
    if (paciente.id) {
      // Editando Registro
      const pacienteActualizado = {
        ...objectoPaciente,
        id: paciente.id
      };
    
      const pacientesActualizado = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? pacienteActualizado : pacienteState
      );
    
      setPacientes(pacientesActualizado);
    } else {
      // Nuevo Registro
      const nuevoPaciente = {
        ...objectoPaciente,
        id: generarId()
      };
    
      setPacientes([...pacientes, nuevoPaciente]);
    }//nos devuelve un arreglo 
   //reiniciar el formulario
setnombre('');
setpropietario('');
setemail('');
setFecha('');
setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
         
         <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
         <p className="text-lg mt-5 text-center mb-10" >
           Añade Paciente y{''}
           <span className="text-indigo-600 font-bold ">Administralos</span>
         </p>
         <form 
           onSubmit={handlesubmit}
           className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
           {error&& <Error>
                    <p>
                    Todos los campos son obligatorios
                    </p>
                    </Error>}
            <div className="mb-5"> 
                 <label htmlFor="mascota" className="font-bold block text-gray-700 uppercase">Nombre Mascota</label>
                 <input
                     id="mascota"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     type="text"
                     placeholder="Escribe el nombre de la Mascota"
                     value={nombre}
                     onChange={(e)=>setnombre(e.target.value)} 
                />
            </div>
            <div className="mb-5"> 
                 <label htmlFor="propietario" className="font-bold block text-gray-700 uppercase">Nombre del Propietario</label>
                 <input
                     id="propietario"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     type="text"
                     placeholder="Nombre del propietario"
                     value={propietario}
                     onChange={(e)=>setpropietario(e.target.value)} 
                />
            </div>
            <div className="mb-5"> 
                 <label htmlFor="email" className="font-bold block text-gray-700 uppercase">Email del Propietario</label>
                 <input
                     id="email"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     type="email"
                     placeholder="Email del propietario"
                     value={email}
                     onChange={(e)=>setemail(e.target.value)} 
                />
            </div>
            <div className="mb-5"> 
                 <label htmlFor="email" className="font-bold block text-gray-700 uppercase">Alta</label>
                 <input
                     id="alta"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     type="date"
                     value={fecha}
                     onChange={(e)=>setFecha(e.target.value)} 
                />
            </div>
            <div className="mb-5"> 
                 <label htmlFor="sintomas
                 " className="font-bold block text-gray-700 uppercase">Sintomas</label>
                 <textarea
                  id="sintomas"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  placeholder="Describe los Sintomas"
                  value={sintomas}
                     onChange={(e)=>setSintomas(e.target.value)} 
                 />
            </div>
            <input type="submit" className="bg-green-600   w-full p-3 text-white uppercase font-bold cursor-pointer 
             hover:bg-indigo-700 transition-colors 
            " value={paciente.id ? "Editar Paciente":"Agregar Paciente"}/>
         </form>
     </div>
  )
}

export default Formulario


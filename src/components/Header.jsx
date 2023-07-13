
function Header() {
    
    let nombre="Seguimiento paciente 2";
    //si creamos una funcion de distinto valores si podemos tener de los componentes hijos al padre
      
    return (
        <>
            <h1 className="font-black text-center text-5xl  md:w-2/3 mx-auto ">
              {nombre}
             <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>
    

     )
}
export default Header;

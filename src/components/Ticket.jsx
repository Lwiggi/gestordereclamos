


const Ticket = ({ticket,setTicket}) => {

  const {cliente,contacto,email,fecha,falla,estado,id} = ticket


 /*  const handleEliminar = () => {
     const respuesta = confirm('Deseas eliminar este ticket')

     if(respuesta) {
      eliminarTicket(id)
     }
  } */
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
       <p className="font-bold mb-3 text-gray-700 uppercase">
        Id: {""}
        <span className="font-normal normal-case">{id}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Cliente: {""}
        <span className="font-normal normal-case">{cliente}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Contacto: {""}
        <span className="font-normal normal-case">{contacto}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Falla: {""}
        <span className="font-normal normal-case">{falla}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Estado: {""}
        <span className="font-normal normal-case">{estado}
        </span>
      </p>

      <div className="flex justify-between mt-10">

      {ticket.estado !=="Cerrado" &&
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={()=> setTicket(ticket)}
        /* https://es.stackoverflow.com/questions/3685/realizar-2-funciones-distintas-en-un-evento-onclick-de-javascript */
        >Cerrar Reclamo</button>}

       {/*  <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button> */}
        <hr></hr>
      </div>

      
    </div>
  );
};

export default Ticket;




const Ticket = ({ticket,setTicket, eliminarTicket}) => {

  const {cliente,contacto,email,fecha,falla,id} = ticket


  const handleEliminar = () => {
     const respuesta = confirm('Deseas eliminar este ticket')

     if(respuesta) {
      eliminarTicket(id)
     }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
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

      <div className="flex justify-between mt-10">

      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={()=> setTicket(ticket)}
        >Editar</button>

        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button>
      </div>

      
    </div>
  );
};

export default Ticket;

import { useState, useEffect } from "react";
import  Error  from './Error.jsx';

function Formulario({tickets,setTickets,ticket,setTicket}) {
  const [cliente, setCliente] = useState("");
  const [contacto, setContacto] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [falla, setFalla] = useState("");
  const [estado, setEstado] = useState("Abierto");

  const [error, setError] = useState(false);

   useEffect(() => {
     if (Object.keys(ticket).length > 0) {

      setCliente(ticket.cliente)
      setContacto(ticket.contacto)
      setEmail(ticket.email)
      setFalla(ticket.falla)
      setFecha(ticket.fecha)
      setEstado(ticket.estado="Cerrado")
     }
   
     
   }, [ticket])
   

  const generarId = () => {
    const random = "TKT-" + Math.round(Math.random()*999999);
   

    return random
  }

  const generarFecha = () => {
    const fecha= new Date(Date.now()).toLocaleString();
   

    return fecha
  }

  const handleSubmit = (e) => {
    

    e.preventDefault();

    // Validacion del formulario

    if ([cliente, contacto, email, falla].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      setError(true);
      return;
    }
    setError(false);

   const objetoTicket ={
    cliente,
    contacto,
    email,
    fecha,
    falla,
    estado
   
   }


   if(ticket.id){

   objetoTicket.id = ticket.id


   const ticketsActualizados = tickets.map(ticketState => ticketState.id === ticket.id ? objetoTicket : ticketState)
 
    setTickets(ticketsActualizados)
    setTicket({})

   }else {
    objetoTicket.id =generarId()
    setTickets([...tickets, objetoTicket]);
    objetoTicket.fecha =generarFecha()
    setTickets([...tickets, objetoTicket]);
   }

    


    //Reiniciar el formulario
    setCliente('')
    setContacto('')
    setEmail('')
    setFecha('')
    setFalla('')
  };

  return (
    <div className="md:w-1/2 lg:w-3/7 md:h-screen">
      <h2 className="font-black text-2xl text-center">Ingrese  Reclamo</h2>

      {/* <p className="text-lg mt-5 text-center mb-10">
        Generar un  {""}
        <span className="text-indigo-600 font-bold ">Reclamo</span>
      </p> */}

      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10"
      >
        {error &&  <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-bold"
          >
            Cliente
          </label>

          <input
            id="cliente"
            type="text"
            placeholder="Razon Social"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="contacto"
            className="block text-gray-700 uppercase font-bold"
          >
            Contacto
          </label>

          <input
            id="contacto"
            type="text"
            placeholder="Nombre del Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

{/*         <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(fecha)}
          />
        </div> */}

        <div className="mb-5">
          <label
            htmlFor="falla"
            className="block text-gray-700 uppercase font-bold"
          >
            Falla
          </label>

          <textarea
            id="falla"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe la falla"
            value={falla}
            onChange={(e) => setFalla(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={ticket.id?'Cerrar reclamo' : 'Generar Reclamo'}
        />
      </form>
    </div>
  );
}
export default Formulario;

import { useNavigate } from "react-router-dom";


const Ticket = ({ticket,setTicket}) => {

  const {cliente,contacto,email,fecha,falla,estado,id} = ticket
  const navigate = useNavigate();
  
 
  return (
    <div className="mx-5 my-10 bg-cyan-100 shadow-md px-5 py-10 rounded-xl">
      
       <p className="font-bold mb-2 text-cyan-700 uppercase">
        Id: {""}
        <span className="font-normal normal-case">{id}</span>
      </p>
      <p className="font-bold mb-2 text-cyan-700 uppercase">
        Cliente: {""}
        <span className="font-normal normal-case">{cliente}</span>
      </p>

      <p className="font-bold mb-2 text-cyan-700 uppercase">
        Contacto: {""}
        <span className="font-normal normal-case">{contacto}</span>
      </p>

      <p className="font-bold mb-2 text-cyan-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-2 text-cyan-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-2 text-cyan-700 uppercase">
        Falla: {""}
        <span className="font-normal normal-case">{falla}
        </span>
      </p>
      <p className="font-bold mb-2 text-cyan-700 uppercase">
        Estado: {""}
        <span className="font-normal normal-case">{estado}
        </span>
      </p>

      <div className="flex justify-between mt-10">

      {ticket.estado !=="Cerrado" &&
        <button 
        type="button"
        className="py-2 px-10 bg-cyan-600 hover:bg-cyan-800 text-white font-bold uppercase rounded-lg"
        onClick={()=> {setTicket(ticket);navigate("/nvotkt")}}
        >Cerrar Reclamo</button>}
        <hr></hr>
      </div>
    </div>
  );
};

export default Ticket;

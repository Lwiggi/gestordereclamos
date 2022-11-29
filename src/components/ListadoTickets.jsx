import Ticket from "./Ticket";


function ListadoTickets({ tickets,setTicket, eliminarTicket }) {
  return (
    <div className="sm:w-full lg:w-full md:h-screen overflow-y-scroll">
      {tickets && tickets.length ? (
        <>
          <h2 className="font-black text-2xl text-center">Listado Tickets</h2>

        {/*   <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              {" "}
              Reclamos{" "}
            </span>
          </p> */}

          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} 
            setTicket={setTicket}
            /* eliminarTicket={eliminarTicket} */
            />

          ))}
          
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay Tickets</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza generando tickets {""}
            <span className="text-indigo-600 font-bold ">
              y apareceran aquí
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoTickets;

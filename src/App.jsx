import { useState, useEffect } from "react";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoTickets from "./components/ListadoTickets";
import NavBar from "./components/NavBar";

function App() {
  const [tickets, setTickets] = useState([]);
  const [ticket, setTicket] = useState({});

  useEffect(() => {

     const obtenerLS = () =>{

      const ticketsLS = JSON.parse(localStorage.getItem('tickets')) ?? [];

      setTickets(ticketsLS)
     }
     obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const eliminarTicket = (id) => {
    const ticketsActualizados = tickets.filter(
      (ticket) => ticket.id !== id
    );
    setTickets(ticketsActualizados);
  };

  return (
    
    <div className="container mx-auto mt-20">
      <NavBar />
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          tickets={tickets}
          setTickets={setTickets}
          ticket={ticket}
          setTicket={setTicket}
        />
        <ListadoTickets
          tickets={tickets}
          setTicket={setTicket}
          eliminarTicket={eliminarTicket}
        />
      </div>
    </div>
  );
}

export default App;

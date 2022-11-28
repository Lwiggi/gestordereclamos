import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoTickets from "./components/ListadoTickets";
import NavBar2 from "./components/NavBar2";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";



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
    <div>
      <NavBar2/>
      <Router>
        <Routes>
          <Route exact path= '/' element ={<Home/>}/>
          <Route path= '/generarticket' element ={<Formulario/>}/>
          <Route path= '/listarticket' element ={<ListadoTickets/>}/>
          <Route path= '/contacto' element ={<Contacto/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
    {/* <div className="container mx-auto mt-2">

   
      
      <div className="mt-10 md:flex">
       {/*  <Formulario
          tickets={tickets}
          setTickets={setTickets}
          ticket={ticket}
          setTicket={setTicket} />
        <ListadoTickets
          tickets={tickets}
          setTicket={setTicket}
          eliminarTicket={eliminarTicket} /> 
        
      </div>
      <Footer/>
    </div> */}
     ;
}

export default App;

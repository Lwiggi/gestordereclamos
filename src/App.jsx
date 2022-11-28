import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoTickets from "./components/ListadoTickets";
import NavBar from "./components/NavBar";
import { Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contacto from "./components/Contacto";



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

  return    (
  
  <div className="container mx-auto mt-2">
    <NavBar/>
            <div className="mt-10 md:flex">
            <Routes>
                <Route exact path= '/' element ={<Home/>}/>
                <Route path= '/nvotkt' element ={<Formulario
                      tickets={tickets}
                      setTickets={setTickets}
                      ticket={ticket}
                      setTicket={setTicket} />}/>
                <Route path= '/listarticket' element ={<ListadoTickets
                      tickets={tickets}
                      setTicket={setTicket}
                      eliminarTicket={eliminarTicket} />}/>
                <Route path= '/contacto' element ={<Contacto/>}/>
             </Routes> 
            </div>
    <Footer/>
   </div> 
   )
   {/*  <div>
      <NavBar2/>
      
        <Routes>
          <Route exact path= '/' element ={<Home/>}/>
          <Route path= '/listarticket' element ={<ListadoTickets/>}/>
          <Route path= '/nvotkt' element ={<Formulario/>}/>
          {/* <Route path= '/contacto' element ={<Contacto/>}/> 
        </Routes>
      
      <Footer/>
  </div> */}
 

    
}

export default App;

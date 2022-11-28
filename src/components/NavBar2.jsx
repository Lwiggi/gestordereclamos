import {Link, NavLink} from 'react-router-dom';

export default function NavBar2() {
  return (
    <nav>
        <Link to= '/'></Link>
        <div>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/generarticket'>Nuevo Ticket</NavLink>
            <NavLink className='nav-link' to='/listarticket'>Listar Tickets</NavLink>
            <NavLink className='nav-link' to='/contacto'>Contacto</NavLink>
        </div>
    </nav>
  )
}

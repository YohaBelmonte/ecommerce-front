import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


function NavBarComponent({ size }) {

  const isAdmin = localStorage.getItem("admin");

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <div className='d-flex'>
            <div className='icons-nav2 styleUser'>
              <Link to="/login" className='mx-lg-2 styleIcons2'>
                <FaUser />
              </Link>
            </div>
            <img src="images/logo-navbar.png" className="logo-navbar" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link-navbar mt-4">
            <li className='container-link'>
              <Link to="/" className='link-nav mx-lg-3 mt-lg-3'>INICIO</Link>
              <Link to="/male" className='link-nav'>MASCULINO</Link>
              <Link to="/famele" className='link-nav mx-lg-3'>FEMENINO</Link>
              <Link to="/aboutUs" className='link-nav'>SOBRE NOSOTROS</Link>
              <Link to="/contact" className='link-nav mx-lg-3'>CONTACTO</Link>
              {isAdmin ? (
                <Link to="/admin" className='link-nav'> <p className="admin-nav">ADMINISTRADOR </p></Link>
              ) : ("")}
            <Link to="/cart" className='link-nav shopping-cart1 mx-lg-4'>MI CARRITO</Link>
            </li>
            <form>
              <input type="search" placeholder="Buscar" className="input-navbar" />
              <Link to="/login" className='icon-nav'>
              <FaUser />
            </Link>
            <Link to="/cart " className='icon-nav'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>{size}</span>
            </Link>
            </form>
       
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar >

  )
}

export default NavBarComponent;

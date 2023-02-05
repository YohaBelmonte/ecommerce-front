import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";


function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <div className='d-flex'>
            <div className='icons-nav2 styleUser'>
              <Link to="/icon-nav" className='mx-lg-2 styleIcons2'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
            <h2 className="ubac-nav">L O G O </h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link-navbar mt-4">
            <li className='container-link'>
              <Link to="/home" className='link-nav mx-lg-5'>INICIO</Link>
              <Link to="/mal" className='link-nav'>MASCULINO</Link>
              <Link to="/famele" className='link-nav mx-lg-5'>FEMENINO</Link>
              <Link to="/aboutUs" className='link-nav'>SOBRE NOSOTROS</Link>
              <Link to="/contact" className='link-nav mx-lg-5'>CONTACTO</Link>
              <Link to="/shoppingCart" className='link-nav shopping-cart1 mx-lg-5'>MI CARRITO</Link>
              <Link to="/shoppingCart" className='link-nav shopping-cart mx-lg-5'>MI CARRITO</Link>
              <Link to="/icon-nav" className='mx-lg-2 icon-nav'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/icon-nav " className='icon-nav'>
                <FontAwesomeIcon icon={faShoppingCart} className="mx-5" />
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar >

  )
}

export default NavBarComponent;

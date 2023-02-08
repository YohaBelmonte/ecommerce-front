import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./NavbarLogin.css";


function NavBarComponent() {
  return (
    <div>
      <Navbar expand="lg">
        <Container className='container-nav d-flex'>
          <div className='d-flex'>
            <div className='icons-nav2'>
              <Link id="user" to="/" className='styleUser'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
            <div className='logo-nav'> <p>L O G O </p></div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto link-navbar">
              <div className='af mx-lg-5'> <Nav.Link href="#home">INICIO</Nav.Link></div>
              <div className='af'> <Nav.Link href="#male">MASCULINO</Nav.Link></div>
              <div className='af mx-lg-5'> <Nav.Link href="#female">FEMENINO</Nav.Link></div>
              <div className='af'> <Nav.Link href="#aboutUs">SOBRE NOSOTROS</Nav.Link></div>
              <div className='af mx-lg-5'> <Nav.Link href="#contact">CONTACTO</Nav.Link></div>
              <div className='af mx-lg-5 shopping-cart'> <Nav.Link href="#contact">MI CARRITO</Nav.Link></div>
            </Nav>
            <div className='icons-nav2'>
              <Link id="user" to="/" className=''>
                <button> register </button>
              </Link>
              <Link id="user" to="/" className=''>
                <button> register </button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComponent;


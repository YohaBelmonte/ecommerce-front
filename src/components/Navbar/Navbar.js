import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


function NavBarComponent({ size }) {

  const isAdmin = localStorage.getItem("admin");

  return (
    <Navbar expand="lg" className="navbar sticky-top">
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
              <Link to="/shop" className='link-nav'>PRODUCTOS</Link>
              <Link to="/aboutUs" className='link-nav mx-lg-3'>SOBRE NOSOTROS</Link>
              <Link to="/contact" className='link-nav'>CONTACTO</Link>
              {isAdmin ? (
                <Link to="/admin" className='link-nav mx-lg-3'> <p className="admin-nav">ADMINISTRADOR </p></Link>
              ) : ("")}
              <Link to="/cart" className='link-nav shopping-cart1 mx-lg-4'>MI CARRITO</Link>
              <Link to="/cart" className='link-nav shopping-cart1 mx-lg-4'>CERRAR SESIÓN</Link>
              <input type="search" placeholder="Buscar" className="input-navbar" />
            </li>

            <form className="d-flex dropdw">
              <Dropdown>
                <Link to="/cart " className='icon-nav '>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>{size}</span>
                </Link>
                <Link to="/fav " className='icon-nav'>
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Dropdown.Toggle variant="dark-50" id="dropdown-basic"  className="dropdw">
                  <FaUser className='mx-lg-2 usuarioIcon' />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdw">
                  <Dropdown.Item href="./login">Mi Perfil</Dropdown.Item>
                  <Dropdown.Item href="./login">Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar >

  )
}

export default NavBarComponent;

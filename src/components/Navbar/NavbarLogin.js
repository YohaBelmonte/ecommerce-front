import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBarComponent({size}) {

 const isAdmin = localStorage.getItem("admin");

  return (
    <Navbar  expand="lg" className="navbar sticky-top">
      <Container>
        <Navbar.Brand>
          <div className='d-flex'>
            <div className='icons-nav2 styleUser'>
              <Link to="/login" className='mx-lg-2 styleIcons2'>
                <FaUser/>
              </Link>
            </div>
           <img src="images/logo-navbar.png" className="logo-navbar"/>
          </div>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav " /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link-navbar mt-4">
            <li className='container-link '>
              <Link to="/aboutUs" className='link-nav'>SOBRE NOSOTROS</Link>
              <Link to="/contact" className='link-nav mx-lg-5'>CONTACTO</Link>     
            </li>
          </Nav>
        </Navbar.Collapse> */}
      </Container>

    </Navbar >

  )
}

export default NavBarComponent;

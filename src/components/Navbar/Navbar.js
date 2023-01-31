import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function NavBarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <div className='d-flex'>
                        <div className='icons-nav2'> <a href="#" className='styleUser' > <FontAwesomeIcon/> </a>
                        </div>
                        <h2 className=" d-flex justify-content-center mt-3 ubac-nav">U B A C</h2> </div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="link-navbar mt-4">
                    

                        <p><a href="#" className='af mx-lg-5' data-replace="INICIO" ><span>INICIO</span></a></p>
                        <p><a href="#" className='af' data-replace="MASCULINO" ><span>MASCULINO</span> </a> </p>
                        <p><a href="#" className='af mx-lg-5' data-replace="FEMENINO" ><span>FEMENINO</span></a></p>
                        <p><a href="./about" className='af' data-replace="SOBRE NOSOTROS" ><span>SOBRE NOSOTROS</span></a></p>
                        <p><a href="#" className='af mx-lg-5' data-replace="CONTACTO"><span>CONTACTO</span></a></p>
                        <p><a href="#" className='af mx-lg-5 shopping-cart' data-replace="CONTACTO"><span>PERFIL</span></a></p>
                        <p><a href="#" className='af shopping-cart' data-replace="CONTACTO"><span>MI CARRITO</span></a></p>
                        <div className='icons-nav'>    <a href="#" className='styleIcons ' > <FontAwesomeIcon icon={faUser} /> </a> <a href="#" className='styleIcons ' > <FontAwesomeIcon icon={faShoppingCart} className="mx-5" /> </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    )
}

export default NavBarComponent;

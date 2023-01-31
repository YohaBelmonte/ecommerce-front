import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt, FaShoppingCart} from "react-icons/fa";
import "./Navbar.css";

function NavBarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <div className='d-flex'>
                        <div className='icons-nav2'> 
                            {/* <a href="#" className='styleUser' ><FontAwesomeIcon/></a> */}
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
                        <div className='icons-nav'>
                            <a href="#" className='styleIcons '><FaUserAlt/></a> 
                            <a href="#" className='styleIcons '><FaShoppingCart/></a>
                        </div>
                        <div className="d-grid justify-content-center ">
                            <Button className=" w-100 mt-1 " variant="success">
                            <Link id="register_login" to="/Login">
                                Login
                            </Link>
                            </Button>
                            <Button className=" w-100 mt-1 " variant="success">
                            <Link id="register_login" to="/register">
                                Registrarse
                            </Link>
                            </Button>
                        </div>
                    </Nav>
                    
                </Navbar.Collapse>
                
            </Container>

        </Navbar >
    )
}

export default NavBarComponent;

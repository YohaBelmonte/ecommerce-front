import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function FooterComponent() {
    return (
        <footer className="footer-section mt-5">
            <div className="container">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="./" className="logo-text"> <p>U B A C</p> </a>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <ul className="social-icons d-flex ">
                                      <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                  <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                      <li><a className="instagram" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                   <li><a className="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-12">  
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading mx-lg-4">
                                    <h3>Servicios </h3>
                                </div>
                                <ul>
                                    <li><a href="#">Inicio</a></li>
                                    <li><a href="#">Masculino</a></li>
                                    <li><a href="#">Femenino</a></li>
                                    <li><a href="#">Zapatillas</a></li>
                                    <li><a href="#">Indumentaria</a></li>
                                    <li><a href="#">Accesorios</a></li>
                                    <li><a href="#">Nuestros servicios</a></li>
                                    <li><a href="#">Sobre Nosotros</a></li>
                                    <li><a href="#">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscrite</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>No deje de suscribirse para obtener descuentos y promociones unicas pensadas para nuestros socios.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Dirección de email"></input>
                                        <button><FontAwesomeIcon icon={faEnvelope}  /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2023, Todos los derechos reservados <a href="./">UBAC</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#">Inicio</a></li>
                                    <li><a href="#">Términos</a></li>
                                    <li><a href="#">Privacidad</a></li>
                                    <li><a href="#">Política</a></li>
                                    <li><a href="#">Contacto</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    )
}


export default FooterComponent;
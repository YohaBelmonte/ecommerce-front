import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function FooterComponent() {
    return (
        <footer class="footer-section mt-5">
            <div class="container">
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="./" className="logo-text"><h2> <p>U B A C</p> </h2></a>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <ul class="social-icons d-flex ">
                                      <li><a class="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                  <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                      <li><a class="instagram" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                   <li><a class="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-12">  
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                                <div class="footer-widget-heading mx-lg-4">
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
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Subscrite</h3>
                                </div>
                                <div class="footer-text mb-25">
                                    <p>No deje de suscribirse para obtener descuentos y promociones unicas pensadas para nuestros socios.</p>
                                </div>
                                <div class="subscribe-form">
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

            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2023, Todos los derechos reservados <a href="./">UBAC</a></p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class="footer-menu">
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
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function FooterComponent() {
    return (
        <footer className="footer-section">
            <div className="container mt-0">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="footer-widget d-flex">
                                <div className="footer-logo">
                                    <a href="/" className="logo-footer"> <img src="/images/logo-footer.png" /> </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons d-flex">
                                    <li><a className="facebook" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a className="twitter" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a className="instagram" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a className="linkedin" href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Servicios </h3>
                                </div>
                                <ul>
                                    <li><a href="/">Inicio</a></li>
                                    <li><a href="/404">Masculino</a></li>
                                    <li><a href="/404">Femenino</a></li>
                                    <li><a href="/404">Zapatillas</a></li>
                                    <li><a href="/404">Indumentaria</a></li>
                                    <li><a href="/404">Accesorios</a></li>
                                    <li><a href="/404">Nuestros servicios</a></li>
                                    <li><a href="/aboutUs">Sobre Nosotros</a></li>
                                    <li><a href="/contact">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Suscribite</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>No deje de suscribirse para obtener descuentos y promociones unicas pensadas para nuestros socios.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Dirección de email"></input>
                                        <a href="/404">  <button className="button-envelope"><FontAwesomeIcon icon={faEnvelope} /></button> </a>
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
                                <p>Copyright &copy; 2023, Todos los derechos reservados <a href="/">JYMD </a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right d-flex">
                            <div className="footer-menu d-flex">
                                <ul>
                                    <li><a href="/404">Inicio</a></li>
                                    <li><a href="/404">Términos</a></li>
                                    <li><a href="/404">Privacidad</a></li>
                                    <li><a href="/404">Política</a></li>
                                    <li><a href="/404">Contacto</a></li>
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
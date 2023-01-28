import "./Carousel.css";
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    return (
        <Carousel className="carousel1 w-100">
            <Carousel.Item>
                <div className="container-img1 d-flex justify-content-center mt-lg-5">
                    <div className="box-img1">
                        <img
                            className="d-block  img-carousel1"
                            src="https://images.prismic.io/ubac/be534d5c-bca9-4a1b-80ac-e20b1a4e06de_3.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=400&h=null%20400w,%20https://images.prismic.io/ubac/be534d5c-bca9-4a1b-80ac-e20b1a4e06de_3.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=600&h=null%20600w,%20https://images.prismic.io/ubac/be534d5c-bca9-4a1b-80ac-e20b1a4e06de_3.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=980&h=null%20980w,%20https://images.prismic.io/ubac/be534d5c-bca9-4a1b-80ac-e20b1a4e06de_3.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=1440&h=null%201440w,%20https://images.prismic.io/ubac/be534d5c-bca9-4a1b-80ac-e20b1a4e06de_3.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=1960&h=null%201960w"
                            alt="First slide"
                        />
                    </div>
                </div>
                <Carousel.Caption>
                    <h3 className="text-dark">¡Nuevo diseño!</h3>
                    <p className="text-dark">varios COLORES</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container-img1 d-flex justify-content-center mt-lg-5">
                    <div className="box-img1">
                        <img
                            className="d-block  img-carousel1"
                            src="https://images.prismic.io/ubac/05c6c8fe-475a-46d0-997a-7b9c37a3b18e_PACKSHOOT+VUES+-+VOLA+Bordeaux-04.png?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=400&h=null%20400w,%20https://images.prismic.io/ubac/05c6c8fe-475a-46d0-997a-7b9c37a3b18e_PACKSHOOT+VUES+-+VOLA+Bordeaux-04.png?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=600&h=null%20600w,%20https://images.prismic.io/ubac/05c6c8fe-475a-46d0-997a-7b9c37a3b18e_PACKSHOOT+VUES+-+VOLA+Bordeaux-04.png?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=980&h=null%20980w,%20https://images.prismic.io/ubac/05c6c8fe-475a-46d0-997a-7b9c37a3b18e_PACKSHOOT+VUES+-+VOLA+Bordeaux-04.png?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=1440&h=null%201440w,%20https://images.prismic.io/ubac/05c6c8fe-475a-46d0-997a-7b9c37a3b18e_PACKSHOOT+VUES+-+VOLA+Bordeaux-04.png?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=1960&h=null%201960w"
                            alt="Second slide"
                        />
                    </div>
                </div>
                <Carousel.Caption>
                    <h3 className="text-dark">¡Nuevo diseño!</h3>
                    <p className="text-dark">Mayor COMODIDAD</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container-img1 d-flex justify-content-center mt-lg-5">
                    <div className="box-img1">
                        <img
                            className="d-block img-carousel1"
                            src="https://images.prismic.io/ubac/f2799483-c9b8-41b0-af2b-a6e343aad98c_2.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=400&h=null%20400w,%20https://images.prismic.io/ubac/f2799483-c9b8-41b0-af2b-a6e343aad98c_2.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=600&h=null%20600w,%20https://images.prismic.io/ubac/f2799483-c9b8-41b0-af2b-a6e343aad98c_2.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=980&h=null%20980w,%20https://images.prismic.io/ubac/f2799483-c9b8-41b0-af2b-a6e343aad98c_2.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=1440&h=null%201440w,%20https://images.prismic.io/ubac/f2799483-c9b8-41b0-af2b-a6e343aad98c_2.jpg?auto=compress%2Cformat&rect=0%2C0%2C4000%2C4000&w=1960&h=null%201960w"
                            alt="Third slide"
                        />
                    </div>
                </div>
                <Carousel.Caption>
                    <h3 className="text-dark">¡Nuevo diseño!</h3>
                    <p className="text-dark">
                        Con materiales 100% RECICLADOS
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;
import "./CarouselHome.css";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CarouselHome () {
    return (
<div>
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esES/Images/ss23-ip-7-launch-hp-mh-d_tcm190-988978.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="textSliders">
          <h3 className="titleSliders2">PARK TRAIL</h3>
          <Link to="/shop" >  <button className="buttonSliders">
            COMPRAR   <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </button> </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esES/Images/sportswear-SS23-global-launch-hp-masthead-primary-d_tcm190-984109.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="textSliders">
          <h3 className="titleSliders">SPORTSWEAR</h3>
          <p>Tu forma de vestir y expresarte. Diseños inspirados en el deporte. Reimaginados para tu día a día</p>
          <Link to="/" > <button className="buttonSliders">
            COMPRAR <FontAwesomeIcon icon={faArrowRight}  className="mx-2"/>
          </button></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
    )
}
export default CarouselHome;
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./aboutUs.css";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    LogOut();
  }, []);

  async function LogOut() {
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      window.location.href = "/login";
    }
  }
  return (
    <div>
      <Navbar />
      <div className='w-100'>
        <div className="video1">
          <iframe src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Sustainability/ss22-dec-planet-hub-update/horizontal-concepts-fw21-purpose-launch-clp-statement-v1-d.mp4" allowFullScreen></iframe>
        </div>
      </div>
      <div className="box-text w-100">
        <div className='d-flex justify-content-center  text-about' >
          <Link to="/" className='mx-2 mt-lg-5  home-about'>HOME</Link>
          <p className="mt-lg-5">•   SOBRE NOSOTROS</p></div>
        {/* este box se va en sm */}
        <div className="mt-2 box-textAbout">
          <h1 className="about"> NUESTRA </h1>
          <Link to="/" className='d-flex justify-content-center vision'>VISIÓN</Link>
        </div>
      </div>



      {/* seccion introduccion */}

      <div className="container1 w-100" id="introducción">
        <div className="row mt-lg-5 w-100">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 col-sm-12 "> <img className="container-img1" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/originals-ss22-adidasxparley_transparency-global-mar-clp-mh-split-media-item-d_tcm216-861918.jpg" />
          </div>
          <div className="col-lg-4 col-sm-12 mx-lg-5 p-5">
            <h5 className="mt-lg-2 title1 ">
              Inspirado en la naturaleza,
              diseñado para el futuro. </h5>
            <p className="text1 ">Desde su creación en 2018, JYMD Shoes ofrece zapatillas fabricadas con materiales naturales y reciclados, con la asociacion de Adidas y Parley for he Oceans.
              JYMD se compromete desde entonces a disminuir la huella de carbono. Aspira a la sensación de libertad y
              protección que los paisajes de alta montaña pueden proporcionar.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          </div>
        </div>
      </div>


      <div className="container2 w-100">
        <div className="row w-100">
          <div className="col-lg-2 col-sm-12">
          </div>
          <div className="col-lg-4 col-sm-12  p-5">
            <h5 className="title1 ">
              ¿Qué es Parley for the Oceans? </h5><p className="text1 mt-lg-2">
              Parley for the Oceans es una organización ambiental y una red de colaboración global. Parley tiene como objetivo crear conciencia sobre la belleza y la fragilidad de los océanos, e inspirar y empoderar a diversos grupos, tales como empresas de vanguardia, marcas, organizaciones, gobiernos, artistas, diseñadores, científicos, innovadores y ambientalistas, en la exploración de nuevas formas de crear, pensar y vivir en nuestro hermoso planeta azul de recursos limitados. </p>
          </div>
          <div className="col-lg-4 col-sm-12 mx-lg-5 text-container2 p-5 mt-lg-5"> <p className="text">
            PORQUE CREEMOS QUE UNA BUENA OBRA ES MEJOR QUE UN LARGO DISCURSO, DONAMOS EL 1% DE NUESTRA FACTURACIÓN A MANOS VERDES, UNA FUNDACIÓN ARGENTINA, SIN FINES DE LUCRO, SOBRE LA PROTECCIÓN DEL MEDIO AMBIENTE </p>  <a href="https://manos-verdes.org/" className='styleIcons d-flex' > <FontAwesomeIcon icon={faPlus} className='iconoPlus' /> <p className="Info mx-lg-2" >   Más información </p></a>
          </div>
          <div className="col-lg-2 col-sm-12">
          </div>
        </div>
      </div>

      <div className="mx-lg-5 container3 w-100 p-2">
        <h5 className="mt-lg-2 title1">
          Transformá el problema en rendimiento </h5>
        <p className="text1">
          Descubrí cómo se fabrica un diseño adidas por Parley</p>
      </div>

      {/* card */}
      <div className='d-flex justify-content-center'>
        <div className='container-cardHome row d-flex justify-content-center'>
          <div className='cards-home col-lg-2 col-md-12 col-xs-12 '>
            <div className='card-home'>
              <Link to="/" ><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/outdoor-ss22-epwpack-drop1-launch-clp-teaser-carousel-1-v2-d_tcm216-864714.jpg" className='img-cardHome' /></Link>
              <div className="card-header">
                <h4 className="title">INTERCEPTAMOS</h4>
              </div>
              <div className="card-body">
                <p>y clasificamos los residuos para eliminar objetos extraños</p>
              </div>
            </div>
          </div>
          <div className='cards-home col-lg-2 col-md-12 col-xs-12'>
            <div className='card-home'>
              <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/outdoor-ss22-epwpack-drop1-launch-clp-teaser-carousel-2-v2-d_tcm216-864718.jpg" className='img-cardHome' /></Link>
              <div className="card-header">
                <h4 className="title">LIMPIAMOS</h4>
              </div>
              <div className="card-body">
                <p>el plástico y lo convertimos en pequeños gránulos de resina </p>
              </div>
            </div>
          </div>

          <div className='cards-home col-lg-2 col-md-12 col-xs-12'>
            <div className='card-home'>
              <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/outdoor-ss22-epwpack-drop1-launch-clp-teaser-carousel-3-v2-d_tcm216-864721.jpg" className='img-cardHome' /></Link>
              <div className="card-header">
                <h4 className="title">TRITURAMOS</h4>
              </div>
              <div className="card-body">
                <p>el plástico y lo convertimos en pequeños gránulos de resina </p>
              </div>
            </div>
          </div>
          <div className='cards-home col-lg-2 col-md-12 col-xs-12'>
            <div className='card-home'>
              <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/outdoor-ss22-epwpack-drop1-launch-clp-teaser-carousel-4-v2-d_tcm216-864723.jpg" className='img-cardHome' /></Link>
              <div className="card-header">
                <h4 className="title">FUNDIMOS</h4>
              </div>
              <div className="card-body">
                <p>los gránulos y los convertimos en hilo de poliéster de alto rendimiento</p>
              </div>
            </div>
          </div>

          <div className='cards-home col-lg-2 col-md-12 col-xs-12'>
            <div className='card-home'>
              <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/outdoor-ss22-epwpack-drop1-launch-clp-teaser-carousel-5-v2-d_tcm216-864726.jpg" className='img-cardHome' /></Link>
              <div className="card-header">
                <h4 className="title">CREAMOS</h4>
              </div>
              <div className="card-body">
                <p>diseños fabricados con Parley Ocean Plastic para darte la opción de poder tomar mejores decisiones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="fondo-ocean d-flex justify-content-center">
          <h5 className="title2">
            EL PLÁSTICO ES UN PROBLEMA. LA INNOVACIÓN ES LA SOLUCIÓN. ESTAS ZAPATILLAS ESTÁN HECHAS A PARTIR DE RESIDUOS PLÁSTICOS RECOGIDOS EN ISLAS, PLAYAS Y ZONAS COSTERAS EVITANDO QUE CONTAMINEN NUESTROS OCÉANOS. </h5>
        </div>
      </div>

      {/* seccion investiga mas  */}
      <div className="d-flex justify-content-center">
        <div className="box-investiga">
          <h5 className="title1 mt-lg-5">INVESTIGA MÁS</h5>
          <p className="text1 p-2">Descubrí cómo convertimos el problema del plástico en diseños de alto rendimiento</p>
        </div>
      </div>
      <div>
        <div className='d-flex justify-content-center mt-lg-5'>
          <div className='container-cardHome row d-flex justify-content-center'>
            <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
              <div className='card-home'>
                <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/running-ss22-adidasxparley_transparency-global-clp-teaser-small-3up-card1-d_tcm216-862053.jpg" className='img-cardHome' /></Link>
                <div className="card-body">
                  <p>Ayudanos a acabar con los residuos plásticos.</p>
                   <div className="mt-lg-4">
                  <u className="text-information"> MÁS INFORMACIÓN</u>
                </div>
              
                </div>
              </div>
            </div>
            <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
              <div className='card-home'>
                <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/running-ss22-adidasxparley_transparency-global-clp-teaser-small-3up-card2-d_tcm216-862055.jpg" className='img-cardHome' /></Link>
                <div className="card-body">
                  <p>Nuestra misión es ayudar a acabar con los residuos plásticos. ¡Sumate vos también!</p>
                  <div>
                  <u className="text-information"> MÁS INFORMACIÓN</u>
                </div>
              
                </div>
              </div>
            </div>
            <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
              <div className='card-home'>
                <Link to="/" > <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/esAR/Images/running-ss22-adidasxparley_transparency-global-clp-teaser-small-3up-card3-d_tcm216-862060.jpg" className='img-cardHome' /></Link>
                <div className="card-body">
                  <p>Este es el camino para acabar con los residuos plásticos</p>
                </div>
                <div className="mx-3 mt-lg-2">
                  <u className="text-information"> MÁS INFORMACIÓN</u>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* seccion Nuestro equipo */}
      <div className="containerTeam w-100 " id="team">
      <h3 className="title1 mt-lg-5">NUESTRO EQUIPO</h3>
        <div className="row d-flex justify-content-center mt-lg-5">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-lg-1 d-flex justify-content-center cardTeam">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Yohana Belmonte</h3>
                <h4 className="title">Lider </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center cardTeam">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=839"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Joaquín Lizarraga</h3>
                <h4 className="title">Sector: Desarollador Web</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center cardTeam">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=856"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Diego Ponce</h3>
                <h4 className="title">Sector: Venta y atención al público</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-lg-2 mx-lg-1 d-flex justify-content-center cardTeam">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=856"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Yuliana Senia</h3>
                <h4 className="title">Sector: Diseño y Marketing</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-lg-2 d-flex justify-content-center cardTeam">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=856"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Julieta Zarzosa</h3>
                <h4 className="title">Sector: Ecológico y ambiental</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-lg-2 d-flex justify-content-center cardTeam">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=836"></img>
              </div>
              <div className="team-content">
                <h3 className="name">Micaela</h3>
                <h4 className="title">Sector: Calidad</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-lg-5">
      </div>
      <Footer />
    </div>


  )
}
export default AboutPage; 
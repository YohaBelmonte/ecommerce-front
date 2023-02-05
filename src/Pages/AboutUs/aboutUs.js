import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./aboutUs.css";

function AboutPage() {
  return (
    // box text ubac vision
    <div>
      <Navbar />
      <div className="box-text w-100">
        <div className='d-flex justify-content-center  text-about' ><a href="/" className='mx-2 mt-lg-5  home-about '>HOME</a> <h6 className="mt-lg-5">•   SOBRE NOSOTROS</h6></div>
        {/* este box se va en sm */}
        <div className="mt-2 ">
          <div ><h1 className="ubac"> UBAC </h1></div>
          <div > <a href="/" className='af d-flex justify-content-center' data-replace="vision"><h1 className="vision" > VISIÓN </h1></a> </div>
        </div>

      </div>

      <div className="container-navbar w-100">
        <div className="row  mt-4  mx-4 navbar-ubac">
          <div className="col-lg-2 col-sm-12"> <p><a href="#introducción" className='af' data-replace="INICIO" ><span>INTRODUCCIÓN</span></a></p> </div>
          <div className="col-lg-2 col-sm-12"> <p><a href="#materiales" className='af' data-replace="MASCULINO" ><span>MATERIALES</span> </a> </p></div>
          <div className="col-lg-2 col-sm-12"> <p><a href="#ubicación" className='af' data-replace="FEMENINO" ><span>UBICACIÓN</span></a></p></div>
          <div className="col-lg-2 col-sm-12"> <p><a href="#certificados" className='af' data-replace="SOBRE NOSOTROS" ><span>CERTIFICADOS</span></a></p></div>
          <div className="col-lg-2 col-sm-12"> <p><a href="#impacto" className='af' data-replace="CONTACTO"><span>IMPACTO AMBIENTAL</span></a></p></div>
          <div className="col-lg-2 col-sm-12"> <p><a href="#team" className='af' data-replace="CONTACTO"><span>NUESTRO EQUIPO</span></a></p></div>
        </div>
      </div>

      {/* seccion introduccion */}

      <div className="container1 w-100" id="introducción">
        <div className="row mt-lg-5">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4 col-sm-12 "> <img className="container-img1 col-12" src="https://img.freepik.com/fotos-premium/piernas-mujer-pantalones-negros-zapatillas-cuero-blanco-estilo-casual-moderno-nueva-coleccion-zapatos_173815-23316.jpg?w=2000" />
          </div>
          <div className="col-lg-4 col-sm-12 mx-lg-5 p-5"> 
            <h5 className="mt-lg-2 title1 ">
              Inspirado en la naturaleza,
              diseñado para el futuro. </h5> 
              <p className="text1 ">Desde su creación en 2018, Ubac ofrece zapatillas fabricadas con materiales naturales y reciclados. La palabra Ubac designa la ladera de la montaña menos expuesta al sol y
                por lo tanto la más preservada de la huella humana. Ubac se convierte entonces en símbolo de una naturaleza preservada y aún salvaje que debemos cuidar. Aspira a la sensación de libertad y
                protección que los paisajes de alta montaña pueden proporcionar.</p>
          </div>
          <div className="col-lg-2 col-sm-12">
          </div>
        </div>
      </div>


      <div className="container2 w-100">
        <div className="row mt-lg-5">
          <div className="col-lg-2 col-sm-12">
          </div>
          <div className="col-lg-4 col-sm-12 mx-lg-5 p-5"> <p className="text1">
            Todos los productos Ubac se fabrican gracias al saber hacer de los artesanos en Argentina con el fin de producir de forma sostenible y promover las industrias locales.

            Se utilizan los materiales más ecológicos, favoreciendo los materiales naturales y reciclados por sus excepcionales cualidades: lana reciclada, cáñamo, algodón reciclado. Según el modelo, las suelas están hechas con caña de azúcar o caucho reciclado. Es también la promesa de salir de una dependencia demasiado fuerte de la industria petrolera. </p>
          </div>
          <div className="col-lg-4 col-sm-12 mx-lg-5 text-container2 p-5"> <p className="text">
            PORQUE CREEMOS QUE UNA BUENA OBRA ES MEJOR QUE UN LARGO DISCURSO, DONAMOS EL 1% DE NUESTRA FACTURACIÓN A MANOS VERDES, UNA FUNDACIÓN ARGENTINA, SIN FINES DE LUCRO, SOBRE LA PROTECCIÓN DEL MEDIO AMBIENTE </p>  <a href="https://manos-verdes.org/" className='styleIcons d-flex' > <FontAwesomeIcon icon={faPlus} className='iconoPlus' /> <p className="signoMas mx-lg-2" >   Más información </p></a>
          </div>
          <div className="col-lg-2 col-sm-12">
          </div>
        </div>
      </div>

      {/* seccion materiales */}
      <div className="seccionMateriales w-100" id="materiales">
        <h1 className="SubTitle">Materiales</h1> 
        {/* solo se ve en response */}
        <div className="carruselResponse ">
          <Carousel>
            <Carousel.Item>
              <div className="box-carrusel">
                <div className="box-imgCarrusel">
                  <img
                    className="d-block w-100 img-carrusel"
                    src="https://images.prismic.io/ubac/bb042896-44d8-41b6-ab8b-fff5f4147b09_Ubac+vision+vola+laine+recyclee.png?auto=compress,format&rect=0,0,640,640&w=640&h=640"
                    alt="First slide"
                  /></div>   </div>
              <div className="mt-2">
                <Carousel.Caption>
                 <h3><p className="text-carrusel">Lana reciclada</p></h3> 
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box-carrusel">
                <div className="box-imgCarrusel">
                  <img
                    className="d-block w-100 img-carrusel"
                    src="https://images.prismic.io/ubac/f225fb14-d05d-47de-a038-a011841d5b76_Casquette+coton+ubac.png?auto=compress,format&rect=0,0,640,640&w=640&h=640"
                    alt="Second slide"
                  /></div></div>
              <div className="mt-2">
                <Carousel.Caption>
                <h3> <p className="text-carrusel">Algodón reciclado</p></h3> 
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box-carrusel">
                <div className="box-imgCarrusel">
                  <img
                    className="d-block w-100 img-carrusel"
                    src="https://images.prismic.io/ubac/155c49bb-7e87-42b7-bc50-c93d0ff72f07_lacets+polyester+recycle+ubac.png?auto=compress,format&rect=0,0,1280,1280&w=640&h=640"
                    alt="Third slide"
                  /> </div> </div>
              <div className="mt-2">
                <Carousel.Caption className="box-textCarrusel">
                  <h3><p className="text-carrusel">Poliester reciclado</p></h3>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box-carrusel">
                <div className="box-imgCarrusel">
                  <img
                    className="d-block w-100 img-carrusel"
                    src="https://images.prismic.io/ubac/541dbc75-480d-47af-9774-0bd9945cd82b_1.png?auto=compress,format&rect=0,0,1280,1280&w=640&h=640"
                    alt="First slide"
                  /> </div>   </div>
              <div className="mt-2">
                <Carousel.Caption className="box-textCarrusel">
                  <h3><p className="text-carrusel">Caucho reciclado</p></h3>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* aqui termina seccion carrusel responsive */}

        <div className="d-flex justify-content-center containerMat w-100">
          <div className="ListMaterials">
            <ul >
              <li className="listMat">
                <a href="#" className='styleIcons d-flex' > <FontAwesomeIcon icon={faPlus} className='iconoPlus mt-lg-4' /> <p className="signoMas mx-lg-2" >  Lana reciclada </p></a>
              </li>
              <li className="listMat">
                <a href="#" className='styleIcons d-flex' > <FontAwesomeIcon icon={faPlus} className='iconoPlus mt-lg-4' /> <p className="signoMas mx-lg-2" >  Algodón reciclada </p></a>
              </li>
              <li className="listMat">
                <a href="#" className='styleIcons d-flex' > <FontAwesomeIcon icon={faPlus} className='iconoPlus mt-lg-4' /> <p className="signoMas mx-lg-2" >  Poliester reciclada </p></a>
              </li>
              <li className="listMat">
                <a href="#" className='styleIcons d-flex' > <FontAwesomeIcon icon={faPlus} className='iconoPlus mt-lg-4' /> <p className="signoMas mx-lg-2" >  Caucho reciclado </p></a>
              </li>
            </ul>
          </div>
          <div className="container-img">
            <div className="box-img">
              <div className="img4">
                <img
                  className="d-block w-100 img-carrusel"
                  src="https://images.prismic.io/ubac/bb042896-44d8-41b6-ab8b-fff5f4147b09_Ubac+vision+vola+laine+recyclee.png?auto=compress,format&rect=0,0,640,640&w=640&h=640"
                  alt="First slide" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seccion ubicacion */}
      <div className="container-ubic w-100" id="ubicación">
        <h1 className="SubTitle p-2">Ubicación</h1> 
        <p className="text2 p-2 text-arg"> Todos los productos son fabricados en Argentina.</p>
      </div>
      <div>
        {/* MAPA DE LA UBICACION */}

      </div>


      {/* seccion certificados */}
      <div className="containerCertificados row d-flex justify-content-center" id="certificados">
        <p className="mt-lg-5  text3">Nuestros certificados </p>
        <div className="col-lg-3 col-sm-12 col-md-3 box-certificats">
          <div>  <img className="img-certificats mt-4" src="https://images.prismic.io/ubac/ee32cadf-7156-4800-abf5-0052891e0683_logo-global-recycled-standart%402x.png?auto=compress%2Cformat&rect=0%2C0%2C359%2C165&w=240&h=null 240w, https://images.prismic.io/ubac/ee32cadf-7156-4800-abf5-0052891e0683_logo-global-recycled-standart%402x.png?auto=compress%2Cformat&rect=0%2C0%2C359%2C165&w=480&h=null 480w, https://images.prismic.io/ubac/ee32cadf-7156-4800-abf5-0052891e0683_logo-global-recycled-standart%402x.png?auto=compress%2Cformat&rect=0%2C0%2C359%2C165&w=600&h=null 600w" /></div>
          <div> <a href="https://certifications.controlunion.com/es/certification-programs/certification-programs/grs-estandar-global-de-reciclaje"><button className="button-certficats mt-lg-5">Ver más +</button></a></div>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-3 box-certificats mx-lg-4">
          <div> <img className="img-certificats mt-4 w-100" src="https://manos-verdes.org/wp-content/uploads/manos-verdes-logo-01.svg" /> </div>
          <div> <a href="https://manos-verdes.org/"><button className="button-certficats mt-lg-5">Ver más +</button></a></div>
        </div>
      </div>


      {/* seccion Impacto ambiental */}
      <div className="containerAmbiental w-100" id="impacto">
        <h1 className="mt-lg-5  SubTitle p-2">Impacto ambiental</h1>
        <p className="mt-lg-5  text4 p-2 mx-lg-5">Tenemos en cuenta el impacto del carbono y la cuestión del final de la vida útil de nuestros productos desde la etapa de diseño para hacerlo siempre mejor. </p>
        <div className="d-flex backImpact">
          <div className="Impact col-lg-7 mx-5 p-lg-5 mt-lg-5">
            <p className="impacto mx-lg-5"><FontAwesomeIcon icon={faPlus} className='iconoPlus' /> Impacto de carbono </p>
            <p className="impacto mx-lg-5"> <FontAwesomeIcon icon={faPlus} className='iconoPlus' /> Reciclable </p>
          </div>
          <div className="col-lg-3 mx-lg-5 textImpact p-lg-5">
            En cuanto a nuestras zapatillas, recuerda reciclarlas localmente depositándolas en un Punto de Aportación Voluntaria (PAV), un lugar habilitado para recoger y almacenar tus textiles y calzado usados. ¡Reciclamos nuestros gorros! De hecho, gracias a un acuerdo con nuestra hilandería de Tarnaise, son reciclables y se pueden utilizar para hacer ropa nueva.
           <hr/>Encuentra la huella de carbono de nuestras zapatillas en cada una de sus fichas de producto. Por ejemplo, VOLA tiene una huella de carbono de 6,1 kg CO2e según una evaluación independiente realizada por Carbon Fact. Esta zapatilla tiene un 66% menos de impacto que la media del sector (17 kg CO2e)
          </div>
        </div>
      </div>

      {/* seccion Nuestro equipo */}
      <div className="containerTeam w-100" id="team">
        <h1 className="mt-lg-5  SubTitle p-2">Nuestro equipo</h1> 
        <div className="row ">
          <div className="col-12 col-sm-0 col-md-0 col-lg-2 ">  </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center cardTeam">
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
          <div className="col-12 col-sm-0 col-md-0 col-lg-2 mt-lg-2">  </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-lg-2 d-flex justify-content-center cardTeam">
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
      <Footer />
    </div>


  )
}
export default AboutPage; 
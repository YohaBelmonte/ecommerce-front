import './ComponentHome.css';
import CarouselHome from '../../components/CarouselHome/CarouselHome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function ComponentHome() {
    return (
        <div className='component-home'>
            {/* seccion carousel */}
            <CarouselHome />
            {/* seccion imagenes */}
            {/* <p className=''>¿Para quién es esta compra?</p>
            <div className='d-flex justify-content-center container-card'>
                <div className='container-cardHome row'>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <Link to="/" ><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdNB1C8OC04OzIIu_uFWU5IcjNtDgER_1VC67DzQt1dUwx_J4UaKkXe6-l8C4BFxyu1bQQAx-LJE2VqOP9hCuMV3Oa5jGf" className='img-cardHome' /></Link>
                            <div class="card-header">
                                <h4 class="title">MUJER</h4>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <Link to="/" ><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdNB1C8OC04OzIIu_uFWU5IcjNtDgER_1VC67DzQt1dUwx_J4UaKkXe6-l8C4BFxyu1bQQAx-LJE2VqOP9hCuMV3Oa5jGf" className='img-cardHome' /></Link>
                            <div class="card-header">
                                <h4 class="title">HOMBRE</h4>
                            </div>
                        </div>
                    </div>  <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <Link to="/" ><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdNB1C8OC04OzIIu_uFWU5IcjNtDgER_1VC67DzQt1dUwx_J4UaKkXe6-l8C4BFxyu1bQQAx-LJE2VqOP9hCuMV3Oa5jGf" className='img-cardHome' /></Link>
                            <div class="card-header">
                                <h4 class="title">NIÑOS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* seccion texto */}
            <div className='text-home'>
                <h1 className='text-h'> ESTA ES TU TIENDA. ESTA ES TU CASA</h1>
            </div>
            {/* seccion cards */}
            <div className='d-flex justify-content-center container-card'>
                <div className='container-cardHome row'>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <Link to="/" ><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdNB1C8OC04OzIIu_uFWU5IcjNtDgER_1VC67DzQt1dUwx_J4UaKkXe6-l8C4BFxyu1bQQAx-LJE2VqOP9hCuMV3Oa5jGf" className='img-cardHome' /></Link>
                            <div class="card-header">
                                <h4 class="title">STREETWEAR</h4>
                                <h4 class="price">$55500</h4>
                            </div>
                            <div class="card-body">
                                <p>AIR JORDAN 1 MID | BEIGE WHITE RED. Es una zapatilla del año 2022 que forma parte de la colección Jordan 1. Viene en una combinación de colores White Onyx/Cardinal Red/Light Curry, construido con revestimientos de cuero beige.</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <Link to="/" > <img src="https://woker.vtexassets.com/arquivos/ids/292438-800-800?v=637945269639330000&width=800&height=800&aspect=true" className='img-cardHome' /></Link>
                            <div class="card-header">
                                <h4 class="title">PARLEY ADIDAS</h4>
                                <h4 class="price">$48300</h4>
                            </div>
                            <div class="card-body">
                                <p>El cambio es posible cuando trabajamos juntos. Es por eso que se asociaron Parley for the Oceans en estos zapatos junto a adidas Forum, como un recordatorio de que todos tenemos un papel que desempeñar para ayudar a acabar con los desechos plásticos. </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <Link to="/" > <img src="https://sothebys-md.brightspotcdn.com/53/92/d28052c64b13b38626ff2b63b049/louis-vuitton-x-nike-air-force-1-low-orange.jpg" className='img-cardHome' /></Link>
                            <div class="card-header">
                                <h4 class="title">LUXURY</h4>
                                <h4 class="price">$57300</h4>
                            </div>
                            <div class="card-body">
                                <p>Para Primavera-Verano 2022, Virgil Abloh colaboró ​​con Nike en Air Force 1 a medida, fusionando los códigos clásicos de la zapatilla con la insignia y los materiales de Louis Vuitton en homenaje a la cultura hip-hop que lo moldeó.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex '>
                <div className='box-imgHome'><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esES/Images/sportswear-SS23-global-educate-eplp-imagecollection-1-d_tcm190-983376.jpg" /> </div>
                <div className='box-imgHome'><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esES/Images/sportswear-SS23-global-educate-eplp-imagecollection-2-updated-d_tcm190-983961.jpg" /></div>
                <div className='box-imgHome'><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esES/Images/sportswear-SS23-global-educate-eplp-imagecollection-3-d_tcm190-983383.jpg" /></div>
                <div className='box-imgHome'><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esES/Images/sportswear-SS23-global-educate-eplp-imagecollection-4-updated-d_tcm190-983962.jpg" /></div>
            </div>
            {/* fin de presentacion de cartas */}
            {/* incio de video */}
            <div className='box-title '><h1 className='title-home'>SNEAKERS</h1></div>
            <div className='d-flex justify-content-center'>
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/2COSkxxOtXY" allowfullscreen></iframe>
                </div>
            </div>
            {/* fin del video */}
            {/* seccion oceano */}
            <div className='mt-lg-5 imgOceanos'>
                <div>
                    <div><p className='text-ocean mt-2'>PROTEGER LOS ÓCEANOS ES NUESTRA PRINCIPAL PRIORIDAD. NUESTRA MISIÓN VA MÁS ALLÁ DEL DEPORTE. ES NUESTRO FUTURO</p></div>
                    <div>  <Link to="/about" ><button className='buttonOcean'>CONOCÉ MÁS <FontAwesomeIcon icon={faArrowRight} className="mx-2" /></button></Link> </div>
                </div>
            </div>
            {/* seccion sneakers */}
            <div className='productGrid'>

            </div>
        </div>
    )
}

export default ComponentHome;
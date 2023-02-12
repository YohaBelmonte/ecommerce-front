import './ComponentHome.css';
import CarouselHome from '../../components/CarouselHome/CarouselHome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function ComponentHome() {
    return (
        <div className='component-home'>
            {/* seccion carousel */}
            <CarouselHome />
            {/* seccion imagenes */}
            {/* seccion texto */}
            <div className='text-home'>
                <h1 className='text-h'> ESTA ES TU TIENDA. ESTA ES TU CASA</h1>
            </div>
            {/* seccion cards */}
            <div className='d-flex justify-content-center'>
                <div className='container-cardHome row'>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ee3c3061fc5464b94c9af5e00a4a964_9366/Avryn_Shoes_Gris_HP5974_01_standard.jpg" className='img-cardHome' />
                            <div class="card-header">
                                <h4 class="title">AVRYN SHOES</h4>
                                <h4 class="price">$13300</h4>
                            </div>
                            <div class="card-body">
                                <p>Las próximas estrellas de tu colección de zapatillas. Estos tenis estilo running agregan un toque deportivo a cualquier atuendo, desde jeans desgastados hasta sastrería.</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9fa15fcba90349b99883af5e00a4c3cb_9366/Avryn_Shoes_Gris_HP5974_03_standard.jpg" className='img-cardHome' />
                            <div class="card-header">
                                <h4 class="title">AVRYN SHOES</h4>
                                <h4 class="price">$13300</h4>
                            </div>
                            <div class="card-body">
                                <p>La parte superior de malla aireada tiene un estilo moderno en capas, mientras que la suela gruesa combina lo mejor de la tecnología de JYMD Shoes. </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cba142818f944575b352af5e00a4d822_9366/Avryn_Shoes_Gris_HP5974_05_standard.jpg" className='img-cardHome' />
                            <div class="card-header">
                                <h4 class="title">AVRYN SHOES</h4>
                                <h4 class="price">$13300</h4>
                            </div>
                            <div class="card-body">
                                <p>Fabricada con una serie de materiales reciclados. Este producto representa solo una de nuestras soluciones para ayudar a acabar con los residuos plásticos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex '>
                <div className='box-imgHome'><img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esES/Images/sportswear-SS23-global-educate-eplp-imagecollection-1-d_tcm190-983376.jpg" /></div>
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
            <div><button className='buttonOcean'>CONOCÉ MÁS <FontAwesomeIcon icon={faArrowRight} className="mx-2" /></button> </div>
            </div>
            </div>
            {/* seccion sneakers */}
            <div className='productGrid'>

            </div>
        </div>
    )
}

export default ComponentHome;
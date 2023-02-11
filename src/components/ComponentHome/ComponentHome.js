import './ComponentHome.css';

function ComponentHome() {
    return (
        <div className='component-home'>
            {/* seccion texto */}
            <div className='text-home'>
                <h1 className='text-h'> Esta es tu tienda, esta es tu casa</h1>
            </div>
            {/* seccion cards */}
            <div className='d-flex justify-content-center'>
                <div className='container-cardHome row'>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/short-en-molleton-sportswear-pour-z5Kgjx.jpg" className='img-cardHome' />
                            <div class="card-header">
                                <h4 class="title">Zapatillas Nike Pro</h4>
                                <h4 class="price">$13300</h4>
                            </div>
                            <div class="card-body">
                                <p>Short moulant pour homme</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/abb537eb-0e70-4e1f-903e-ec46b8657c0d/short-de-training-en-tissu-fleece-dri-fit-pour-n97b2F.jpg" className='img-cardHome' />
                            <div class="card-header">
                                <h4 class="title">Zapatillas Nike Pro</h4>
                                <h4 class="price">$13300</h4>
                            </div>
                            <div class="card-body">
                                <p>Short moulant pour homme</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-home col-lg-4 col-md-12 col-xs-12'>
                        <div className='card-home'>
                            <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/short-en-molleton-sportswear-pour-z5Kgjx.jpg" className='img-cardHome' />
                            <div class="card-header">
                                <h4 class="title">Zapatillas Nike Pro</h4>
                                <h4 class="price">$13300</h4>
                            </div>
                            <div class="card-body">
                                <p>Short moulant pour homme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fin de presentacion de cartas */}
            {/* incio de video */}
            <div className='d-flex justify-content-center'>
            <div class="video">
                <iframe src="https://www.youtube.com/embed/2COSkxxOtXY" allowfullscreen></iframe>
            </div>
            </div>
            {/* fin del video */}

        </div>
    )
}

export default ComponentHome;
import Accordion from 'react-bootstrap/Accordion';
import { Button, Modal, } from 'react-bootstrap';
import { useState } from 'react';

function Acordeon() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='container-fluid'>
            <div className="crud shadow-lg p-3 my-5 bg-dark">
            <div className='text-center'><h3 className="text-white m-4">FAQ</h3></div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='col-11'>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className='d-flex justify-content-center m-3'>

                            <a className="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }} onClick={handleShow}><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i className="material-icons">&#xE872;</i></a>
                        </div>
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1" className='pt-2'>
                    <Accordion.Header className='col-11'>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className='d-flex justify-content-center m-3'>
        
                    <a className="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }} onClick={handleShow}><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i className="material-icons">&#xE872;</i></a>
        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='pt-2'>
                    <Accordion.Header className='col-11'>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className='d-flex justify-content-center m-3'>
        
                    <a className="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }} onClick={handleShow}><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i className="material-icons">&#xE872;</i></a>
        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='pt-2'>
                    <Accordion.Header className='col-11'>Accordion Item #4</Accordion.Header>
                    <Accordion.Body>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className='d-flex justify-content-center m-3'>
        
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }} onClick={handleShow}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='pt-2'>
                    <Accordion.Header className='col-11'>Accordion Item #5</Accordion.Header>
                    <Accordion.Body>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className='d-flex justify-content-center m-3'>
        
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }} onClick={handleShow}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='pt-2'>
                    <Accordion.Header className='col-11'>Accordion Item #6</Accordion.Header>
                    <Accordion.Body>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className='d-flex justify-content-center m-3'>
        
                    <a className="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }} onClick={handleShow}><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i className="material-icons">&#xE872;</i></a>
        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            

            {/* <!--- Model Box ---> */}
            <div className="model_box">
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar Pregunta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Question" placeholder="Pregunta" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Answer" placeholder="Respuesta" />
                            </div>

                            <button className="btn btn-dark rounded-0"><span>Actualizar</span></button>
                            
                        </form>
                    </Modal.Body>
                </Modal>

                {/* Model Box Finsihs */}
            </div>
        </div>

    );
}

export default Acordeon;
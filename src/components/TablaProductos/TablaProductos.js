import 'bootstrap/dist/css/bootstrap.min.css';
import './TablaProductos.css'
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';

function TablaProductos() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className="container-fluid">
      <div className="crud shadow-lg p-3 my-5 bg-dark">
        <div class="row ">

          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar Producto" aria-label="search" />

              </form>
            </div>
          </div>
          <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-white"><h4>PRODUCTOS</h4></div>
          <div class="col-sm-3 offset-sm-1  mt-4 mb-4 text-gred">

            <Button className="btn btn-outline-none btn-success" onClick={handleShow}>
              Añadir Producto
            </Button>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="table-responsive" >
            <table class="table table-hover table-bordered  bg-light">
              <thead className='text-center'>
                <tr>
                  <th className='col-1'>id</th>
                  <th className='col-2'>Nombre</th>
                  <th className='col-2'>Descripción</th>
                  <th className='col-2'>Precio</th>
                  <th className='col-2'>Categoría</th>
                  <th className='col-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-center'>

                <tr>
                  <td>{Math.round(Math.random() * 100)}</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>30/01/2023</td>
                  <td>Mujer</td>
                  <td className='d-flex justify-content-evenly'>
                    <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>{Math.round(Math.random() * 100)}</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>30/01/2023</td>
                  <td>Mujer</td>
                  <td className='d-flex justify-content-evenly'>
                    <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>{Math.round(Math.random() * 100)}</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>30/01/2023</td>
                  <td>Mujer</td>
                  <td className='d-flex justify-content-evenly'>
                    <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>{Math.round(Math.random() * 100)}</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>30/01/2023</td>
                  <td>Mujer</td>
                  <td className='d-flex justify-content-evenly'>
                    <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>{Math.round(Math.random() * 100)}</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>30/01/2023</td>
                  <td>Mujer</td>
                  <td className='d-flex justify-content-evenly'>
                    <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                  </td>
                </tr>
                <tr>
                  <td>{Math.round(Math.random() * 100)}</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  <td>30/01/2023</td>
                  <td>Mujer</td>
                  <td className='d-flex justify-content-evenly'>
                    <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
              <Modal.Title>Añadir Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Name" placeholder="Nombre" />
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Description" placeholder="Descripción" />
                </div>
                <div class="form-group mt-3">
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="Price" placeholder="Precio" />
                </div>
                <div class="form-group my-3">
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="URL" />
                </div>
                <div class="form-group my-3">

                  <select class="form-control" id="category_field">
                    <option type="disable">Categoría</option>
                    <option>Hombre</option>
                    <option>Mujer</option>
                    <option>No binarie</option>
                    <option>Otres</option>
                    <option>Niños</option>
                  </select>
                </div>
                <Form.Group controlId="formFileSm" className="mb-3">

                  <Form.Control type="file" size="m" />
                </Form.Group>

                <button class="custom-btn btn-5"><span>Añadir</span></button>
              </form>
            </Modal.Body>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default TablaProductos;

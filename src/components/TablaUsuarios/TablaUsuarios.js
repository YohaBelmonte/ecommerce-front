import 'bootstrap/dist/css/bootstrap.min.css';
import './TablaUsuarios.css'
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { Button, Modal, InputGroup } from 'react-bootstrap';
import axios from 'axios';


const url = "http://localhost:4000/api";


function TablaUsuarios() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});

  function OnChange(e) {
    const { name, value, } = e.target;
    const response = {
      ...form, [name]: value,
    };
    setForm(response);
    console.log(response)
  }

  async function Register() {

    try {
      const response = await axios.post(`${url}/user`, form)
      alert("se registró con exito")
      window.location.href = "/admin/usuarios"

    } catch (error) {

      console.error(error)
    }

  }




  useEffect(() => {
    const peticionGet = async () => {
      const data = await axios.get(`${url}/user`)
        .then(response => {
          setData(response.data)
        });
    }
    peticionGet()
      .catch(console.error);

  },[])


  return (

    <div className="container-fluid">
      <div className="crud shadow-lg p-3 my-5 bg-dark">
        <div class="row p-2">

          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar Usuario" aria-label="search" />

              </form>
            </div>
          </div>
          <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-white"><h4>USUARIOS</h4></div>
          <div class="col-sm-3 offset-sm-1 d-flex py-3 px-0 justify-content-end">

            <Button className="btn btn-outline-none btn-success" onClick={handleShow}>
              Añadir Usuario
            </Button>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="table-responsive" >
            <table class="table table-hover table-bordered  bg-light col-8">
              <thead className='text-center'>
                <tr >
                  <th className='col-1'>id</th>
                  <th className='col-2'>Name</th>
                  <th className='col-2'>Email</th>
                  <th className='col-2'>Fecha de registro</th>
                  <th className='col-2'>Es admin</th>
                  <th className='col-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.createAdd}</td>
                    <td><input type="checkbox" className="mx-1" /></td>
                    <td className='d-flex justify-content-evenly'>
                      <a class="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i class="material-icons">&#xE417;</i></a>
                      <a class="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i class="material-icons">&#xE254;</i></a>
                      <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }}><i class="material-icons">&#xE872;</i></a>
                    </td>
                  </tr>

                ))}

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
              <Modal.Title>Añadir Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <input type="text" class="form-control" id="exampleInputEmail1" name='name'  onChange={OnChange} placeholder="Nombre" />
                </div>
                <div className="form-group mt-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" name='email'  onChange={OnChange} placeholder="Email" />
                </div>
                <div className="form-group my-3">
                  <input type="password" class="form-control" id="exampleInputEmail1" name='password'  onChange={OnChange} placeholder="Contraseña" />
                </div>
                <InputGroup className=" d-flex mb-3">
                  <input type="checkbox" className="mx-1" />

                  <Form type="disable" aria-label="Text input with checkbox" className='border-0 text-secondary mx-2'>Es administrador</Form>
                </InputGroup>

                <button className="custom-btn btn-5" onClick={Register}><span>Añadir</span></button>
              </form>
            </Modal.Body>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default TablaUsuarios;

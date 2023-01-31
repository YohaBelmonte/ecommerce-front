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

  //Get Method
  const [posts, setposts] = useState([]);


  useEffect(() => {
    GetMethod();
  }, []);

  async function GetMethod() {
    try {
      const { data } = await axios.get(`${url}/user`)
      setposts(data)
    } catch (error) {
      console.error(error)
    }
  }




  useEffect(() => {
    const peticionGet = async () => {
      const { data } = await axios.get(`${url}/user`)
      setData(data)
    }
    peticionGet()
      .catch(console.error);

  }, [])




  async function deletUser(id) {
    try {
      const { data } = await axios.delete(`${url}/user/${id}`)
      GetMethod()
      handleClose(false)
      // window.location.href = "/admin/usuarios"

    } catch (error) {
      console.error(error)
    }
  }



  return (

    <div className="container-fluid">
      <div className="crud shadow-lg p-3 my-5 bg-dark">
        <div className="row p-2">

          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar Usuario" aria-label="search" />

              </form>
            </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-white"><h4>USUARIOS</h4></div>
          <div className="col-sm-3 offset-sm-1 d-flex py-3 px-0 justify-content-end">

            <Button className="btn btn-outline-none btn-success" onClick={handleShow}>
              Añadir Usuario
            </Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="table-responsive" >
            <table className="table table-hover table-bordered  bg-light col-8">
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
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.createAdd}</td>
                    <td><input type="checkbox" className="mx-1" /></td>
                    <td className='d-flex justify-content-evenly'>
                      <a className="view" title="View" data-toggle="tooltip" style={{ color: "grey" }}><i className="material-icons">&#xE417;</i></a>
                      <a className="edit" title="Edit" data-toggle="tooltip" style={{ color: "darkgreen" }}><i className="material-icons">&#xE254;</i></a>
                      <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "black" }} onClick={() => deletUser(item._id)}><i className="material-icons">&#xE872;</i></a>
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
                  <input type="text" className="form-control" id="exampleInputEmail1" name='name' onChange={OnChange} placeholder="Nombre" />
                </div>
                <div className="form-group mt-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={OnChange} placeholder="Email" />
                </div>
                <div className="form-group my-3">
                  <input type="password" className="form-control" id="exampleInputEmail1" name='password' onChange={OnChange} placeholder="Contraseña" />
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

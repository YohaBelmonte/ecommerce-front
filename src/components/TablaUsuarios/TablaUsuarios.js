import NavBarComponent from "../../components/Navbar/Navbar";
import { Button, Modal } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";
import useAdmin from "../../Utils/useAdmin";
import axios from "axios";
import "./TablaUsuarios.js";

function TablaUsuarios() {
  const [edit, editShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleeditClose = () => editShow(false);
  const handleEditShow = () => editShow(true);
  const {
    data,
    OnChange,
    Register,
    deletUser,
    usuarios,
    busqueda,
    handleChange,
  } = useAdmin();

  const [update, setupdate] = useState({});

  function OnChangeUpdate(e) {
    const { name, value } = e.target;
    const response = { ...update, [name]: value };
    setupdate(response);
  }

  var url = "http://localhost:4000/api";

  const [id, setId] = useState("");

  async function PutMethod(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${url}/user/${id}`, update);
      setId("");
      window.location.reload();
    } catch (error) {
      alert("No se pudo");
      console.error(error);
    }
  }

  async function onChange(id) {
    try {
      const { data } = await axios.put(`${url}/user/isAdmin/${id}`, {});
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  const mapUsers = usuarios.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.createAdd}</td>
        <td>
          {item.isAdmin ? (
            <button
              className="btn btn-success"
              onClick={() => onChange(item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg text-light"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </button>
          ) : (
            <button
              className="btn btn-outline-success"
              onClick={() => onChange(item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </button>
          )}
        </td>
        <td className="d-flex justify-content-evenly">
          {/* ↓↓↓ Botones de la tabla ↓↓↓ */}
          <h2 className="btn" onClick={() => deletUser(item._id)}>
            <AiTwotoneDelete />
          </h2>
          <h2 className="btn btn-outline-none" onClick={() => setId(item._id)}>
            <BiEdit />
          </h2>
        </td>
      </tr>
    );
  });

  return (
    (<NavBarComponent />),
    (
      <div className="container-fluid ">
        <div className="crud shadow-lg p-3 my-5 bg-dark ">
          <div className="row p-2">
            <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="containerInput">
                <input
                  className="form-control inputBuscar text-center"
                  value={busqueda}
                  placeholder="Buscar Usuario"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-white">
              <h4>USUARIOS</h4>
            </div>
            <div className="col-sm-3 offset-sm-1 d-flex py-3 px-0 justify-content-end">
              <Button
                className="btn btn-outline-none btn-success"
                onClick={handleShow}
              >
                NUEVO USUARIO
              </Button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="table-responsive">
              <table className="table table-hover table-bordered  bg-light col-8">
                <thead className="text-center">
                  <tr>
                    <th className="col-1">id</th>
                    <th className="col-2">Name</th>
                    <th className="col-2">Email</th>
                    <th className="col-2">Fecha de registro</th>
                    <th className="col-2">Es admin</th>
                    <th className="col-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">{mapUsers}</tbody>
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="name"
                      placeholder="Nombre"
                      onChange={OnChange}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="email"
                      placeholder="Email"
                      onChange={OnChange}
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="password"
                      placeholder="Contraseña"
                      onChange={OnChange}
                    />
                  </div>
            
                  <button
                    className="custom-btn btn-5"
                    onClick={() => Register()}
                  >
                    <span>AÑADIR</span>
                  </button>
                </form>
              </Modal.Body>
            </Modal>

            {/* Model Box Finsihs */}
          </div>
          {/* Modal Edit */}
          <div>
            <>
        
              <Modal
                show={id != "" ? true : false}
                onHide={handleeditClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="name"
                        onChange={OnChangeUpdate}
                        placeholder="New Name"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        onChange={OnChangeUpdate}
                        placeholder="New Email"
                      />
                    </div>

                    <div className="form-group my-3">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="password"
                        onChange={OnChangeUpdate}
                        placeholder="New Password"
                      />
                    </div>
                    <button
                      className="custom-btn btn-5"
                      onClick={() => setId("")}
                    >
                      <span>Cancelar</span>
                    </button>
                    <button className="custom-btn btn-5" onClick={PutMethod}>
                      <span>Editar</span>
                    </button>
                  </form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </>
          </div>
        </div>
      </div>
    )
  );
}

export default TablaUsuarios;

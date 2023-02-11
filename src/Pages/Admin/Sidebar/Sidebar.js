import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sidebar.css"
import CardComponents from '../AdminIcon/AdminIcon';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';



function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mt-5">
          <>
      <Button variant="primary" className="d-lg-none buttonsAdmin" onClick={handleShow}>
        Admin
      </Button>


      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >Admin Options</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
          <div className="bg-white px-3" id="sidebar-wrapper">
        <div className="container-fluid text-center d-flex justify-content-center">

          <div>
            <CardComponents icons={
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
                ADMIN
              </h4>
            } />

          </div>

        </div>


        {/* esto no va */}
        <div className="list-group list-group-flush text-center">
        <Link to="/" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Inicio</p></Link>

          <Link to="/admin" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Dashboard</p></Link>
          <Link to="/admin/usuarios" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Usuarios</p></Link>
          <Link to="/admin/productos" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Productos</p></Link>
          <Link to="/admin/AboutUs" className="list-group-item list-group-item-action bg-transparent second-text fw-bold active"><p className='af'>AboutUs</p></Link>
          <Link to="/admin/Faq" className="list-group-item list-group-item-action bg-transparent second-text fw-bold active"><p className='af'>FAQ</p></Link>
          <Link to="/admin" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold active"><p className='aff text-danger'>Logout</p></Link>

        </div>
      </div>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </div>

  );
}

export default Sidebar;
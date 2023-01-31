import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sidebar.css"
import CardComponents from '../AdminIcon/AdminIcon';
import { Link } from "react-router-dom";



function Sidebar() {
  return (
    <div className="d-flex mt-5" id="wrapper">
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
          <Link to="/admin" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Dashboard</p></Link>
          <Link to="/admin/usuarios" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Usuarios</p></Link>         
          <Link to="/admin/productos" className="list-group-item list-group-item-action bg-transparent second-text active"><p className='af'>Productos</p></Link>
          <a href="/admin" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><p className='af'>AboutUs</p></a>
          <a href="/admin/Faq" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><p className='af'>FAQ</p></a>
          <a href="/admin" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><p className='aff text-danger'>Logout</p></a>
        </div>
      </div>

    </div>

  );
}

export default Sidebar;
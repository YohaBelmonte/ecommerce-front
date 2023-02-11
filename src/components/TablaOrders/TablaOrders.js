import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button, Modal, InputGroup } from 'react-bootstrap';
import useHome from '../../Utils/useHome';
import useAdmin from '../../Utils/useAdmin';
import Table from 'react-bootstrap/Table';
import { BiEdit } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';
import axios from "axios";
import OrdersProduct from '../CardProductOrders/CardProductOrders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function TablaOrders() {
  
  const { data, headers, token, GetUsers } = useAdmin();
  const { product } = useHome();
  const [id, setId] = useState("")
  const [busqueda, setBusqueda]= useState("");
  var url = "http://localhost:4000/api";

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=data.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    data(resultadosBusqueda);
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log(busqueda);
  }

  const mapProduct = data.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td></td>
      </tr>
    );

  }

  )



  return (
    <div className="container-fluid ">
      <div className="crud shadow-lg p-3 my-5 bg-dark ">
        <div className="row p-2">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
          <div className="containerInput">
        <input
          className="form-control inputBuscar text-center"
          value={busqueda}
          placeholder="Search"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-white"><h4>Orders</h4></div>
        </div>

        <div >
          <Table responsive="sm" variant="dark" striped="columns" >
            <thead>
              <tr>
                <th className='col-1'>ID Users</th>
                <th className='col-1'>Name Users</th>
                <th className='col-2'>Name Productos</th>
                <th className='col-2'>ID Product</th>
              </tr>
            </thead>
            <tbody className='tabla'>
              {mapProduct}
            </tbody>
          </Table>
        </div>
      </div>
    </div>


  );
}

export default TablaOrders;


import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import useHome from '../../Utils/useHome';
import useAdmin from '../../Utils/useAdmin';
import Table from 'react-bootstrap/Table';
import axios from "axios";
function TablaOrders() {

  const { usuarios, headers, token, GetUsers } = useAdmin();
  const { product } = useHome();
  const [id, setId] = useState("")
  const [busqueda, setBusqueda] = useState("");
  var url = "http://localhost:4000/api";


  const mapProduct = usuarios.map((item, i) => {
    return (
      <tr key={i}>
        <td >{item._id}</td>
        <td className='text-center'>{item.name}</td>
        <td className='text-center'>
          {item.arrayProduct.map((order,i) => {
            return (
              <div key={i}>
                {order.name}
              </div>
            )
          })}
        </td>
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
                <th className='col-2'>Estado de Compra</th>
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


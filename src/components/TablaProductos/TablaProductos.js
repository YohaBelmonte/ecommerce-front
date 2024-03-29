import 'bootstrap/dist/css/bootstrap.min.css';
import './TablaProductos.css'
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAdmin from '../../Utils/useAdmin';
import Table from 'react-bootstrap/Table';
import { BiEdit } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';
import axios from "axios";

function TablaProductos() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edit, editShow] = useState(false);
  const handleeditClose = () => editShow(false);
  const handleEditShow = () => editShow(true);
  const { data, OnChangeProduct,MethodPostProduct,headers,
   deletProduct,handleChangeProduct,busquedaProduct,product } = useAdmin();
  const [updateProduct, setupdateProduct] = useState({});
  const [id, setId] = useState("")
  var url = "https://jymd-ca6s.onrender.com/api";

  useEffect(() => {
    LogOut();
  }, []);

  async function LogOut() {
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      window.location.href = "/login";
    }
  }

  function OnChangeUpdate(e) {
    const { name, value } = e.target;
    const response = { ...updateProduct, [name]: value }
    setupdateProduct(response);
  }

  async function PutMethodProduct(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${url}/product/${id}`, updateProduct, { headers });
      setId("")
      window.location.reload()
    } catch (error) {
      alert("No se pudo");
      console.error(error);
    }
  }

  const mapAdminProduct = product.map((item, i) => {

    return (
      <tr className='tabla bg-white ' key={i}>
        <td className='col-1 '>{item._id}</td>
        <td className='col-1 '>{item.name}</td>
        <td className='col-2 '> <img src={item.image} alt="" className="imageProduct"></img></td>
        <td className='col-2 '>
          <div className="adminOverflow">
            {item.description}
          </div>
        </td>
        <td className='col-2 '>{item.category}</td>
        <td className='col-1 '>{item.price}</td>
        <td className='col-2 '>{item.size}</td>
        <td className='col-1 '>{item.countInStock}</td>
        <td className='col-1 d-flex'>
          <h2 className='btn ' onClick={() => deletProduct(item._id)}><AiTwotoneDelete /></h2>
          <h2 className='btn ' onClick={() => setId(item._id)}> <BiEdit /></h2>
        </td>
      </tr>
    );

  })

  return (
    <div className="container-fluid ">
      <div className="crud shadow-lg p-3 my-5 bg-dark ">
        <div className="row p-2">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
          <div className="containerInput">
              <input
                className="form-control inputBuscar text-center"
                value={busquedaProduct}
                placeholder="Buscar Usuario"
                onChange={handleChangeProduct}
              />

            </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-white"><h4>Productos</h4></div>
          <div className="col-sm-3 offset-sm-1 d-flex py-3 px-0 justify-content-end">
            <Button className="btn btn-outline-none btn-success" onClick={handleShow}>
              Añadir Producto
            </Button>
          </div>
        </div>

        <div >
          <Table responsive="lg" variant="light" striped="columns" >
            <thead>
              <tr>
                <th className='col-1'>ID</th>
                <th className='col-1'>Producto</th>
                <th className='col-2'>Imagen</th>
                <th className='col-2'>Descripción</th>
                <th className='col-2'>Categoria</th>
                <th className='col-1'>Precio</th>
                <th className='col-2'>Talle</th>
                <th className='col-1'>Stock</th>
                <th className='col-1'>Acciones</th>

              </tr>
            </thead>
            <tbody className='tabla'>
              {mapAdminProduct}
            </tbody>
          </Table>
        </div>

      </div>


      <div className="model_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}

        >
          <Modal.Header closeButton>
            <Modal.Title>Añadir Productos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="tabla-Products">
              <div className="form-group">
                <input type="text" className="form-control" name='name' placeholder="Name" onChange={OnChangeProduct} />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name='image' placeholder="Image" onChange={OnChangeProduct} />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name='image2' placeholder="Image2" onChange={OnChangeProduct} />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name='image3' placeholder="Image3" onChange={OnChangeProduct} />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name='image4' placeholder="Image4" onChange={OnChangeProduct} />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" name='description' placeholder="Description" onChange={OnChangeProduct} />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" name='category' placeholder="Category" onChange={OnChangeProduct} />
              </div>
              <div className="form-group my-3">
                <input type="number" className="form-control" name='price' placeholder="Price" onChange={OnChangeProduct} />
              </div>
              <div className="form-group my-3">
                <input type="number" className="form-control" name='size' placeholder="Size" onChange={OnChangeProduct} />
              </div>
              <div className="form-group my-3">
                <input type="number" className="form-control" name='countInStocks' placeholder="Stock" onChange={OnChangeProduct} />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control" name='color' placeholder="Color" onChange={OnChangeProduct} />
              </div>
        
              <button className="custom-btn btn-5" onClick={() => MethodPostProduct()}><span>Añadir</span></button>
            </form>
          </Modal.Body>
        </Modal>
        {/* Model Box Finsihs */}
        <div>
          <>
            <Modal
              show={id != "" ? true : false}
              onHide={handleeditClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header >
                <Modal.Title>Editar producto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" name='name' onChange={OnChangeUpdate} placeholder="Nombre" />
                  </div>

                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name='image' onChange={OnChangeUpdate} placeholder="Imagen" />
                  </div>

                  <div className="form-group my-3">
                    <input type="text" className="form-control" name='description' onChange={OnChangeUpdate} placeholder="Descripción" />
                  </div>
                  <div className="form-group my-3">
                    <input type="number" className="form-control" name='price' onChange={OnChangeUpdate} placeholder="Precio" />
                  </div>
                  <div className="form-group my-3">
                    <input type="text" className="form-control" name='category' onChange={OnChangeUpdate} placeholder="Categoría" />
                  </div>
                  <div className="form-group my-3">
                    <input type="number" className="form-control" name='countInStock' onChange={OnChangeUpdate} placeholder="Stock" />
                  </div>
                  <div className="form-group my-3">
                    <input type="number" className="form-control" name='rating' onChange={OnChangeUpdate} placeholder="Clasificación" />
                  </div>
                  <div>
                  <button className="custom-btn btn-5" onClick={() => setId("")}><span>Cancelar</span></button>
                  <button className="custom-btn btn-5" onClick={PutMethodProduct} ><span>Editar</span></button>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>

    </div>


  );
}

export default TablaProductos;


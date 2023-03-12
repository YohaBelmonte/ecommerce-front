import { useEffect, useState } from "react";
import axios from "axios";

function useAdmin() {
  var url = "http://localhost:4000/api";

  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  // Register users
  function OnChange(e) {
    const { name, value } = e.target;
    const response = {
      ...form,
      [name]: value,
    };
    setForm(response);
  }

  async function Register() {
    try {
      const response = await axios.post(`${url}/user`, form);
      alert("se registró con exito");
      window.location.href = "/admin/usuarios";
    } catch (error) {
      console.error(error);
    }
  }
  async function deletUser(id) {
    try {
      const isDelete = window.confirm(`Quieres eliminar el Usuario ${id}?`);
      if (isDelete) {
      const { data } = await axios.delete(`${url}/user/${id}`);
      alert("Usuario eliminado con exito");
      window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Search Usuarios Y PETICION GET DE USUARIOS ↓↓↓↓
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios.get(`${url}/user`,)
      .then(response => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (elemento._id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }

  useEffect(() => {
    peticionGet();
  }, [])

  //  Search Productos Y PETICION GET DE PRODUCTOS 
  const [product, setProduct] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);
  const [busquedaProduct, setBusquedaProduct] = useState("");


  const peticionGetProduct = async () => {
    await axios.get(`${url}/product`, { headers })
      .then(response => {
        setProduct(response.data);
        setTablaProductos(response.data);
      }).catch(error => {
        console.log(error);
      })
  }
  const handleChangeProduct = e => {
    setBusquedaProduct(e.target.value);
    filtrarProduct(e.target.value);
  }
  const filtrarProduct = (terminoBusqueda) => {
    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (elemento._id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProduct(resultadosBusqueda);
  }
  useEffect(() => {
    peticionGetProduct();
  }, [])

  // Tabla de productos = Admin Page     

  const [formProduct, setFormProduct] = useState({});

  function OnChangeProduct(e) {
    const { name, value } = e.target;
    const response = {
      ...formProduct,
      [name]: value,
    };
    setFormProduct(response);
  }

  //Añadir producto en ADMIN
  async function MethodPostProduct() {
    try {
      const response = await axios.post(`${url}/product`, formProduct, { headers });
      window.location.reload();
      alert("Producto añadido con exito");
    } catch (error) {
      console.error(error);

    }
  }

  async function deletProduct(id) {
    try {
      const isDelete = window.confirm(`Quieres eliminar el producto ${id}?`);
      if (isDelete) {
      const { data } = await axios.delete(`${url}/product/${id}`, formProduct, { headers });
      alert("Producto eliminado con exito");
      window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    data,
    Register,
    OnChange,
    deletUser,
    OnChangeProduct,
    MethodPostProduct,
    headers,
    token,
    deletProduct,
    tablaUsuarios, 
    setTablaUsuarios,
    usuarios,
     setUsuarios, busqueda, setBusqueda, handleChange, peticionGet
    , peticionGetProduct, handleChangeProduct, busquedaProduct, setProduct, product

  };
}
export default useAdmin;

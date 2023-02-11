import { useEffect, useState } from "react";
import axios from "axios";

function useAdmin() {
  var url = "http://localhost:4000/api";

  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  useEffect(() => {
    GetUsers();
    
  }, []);

  // Method Get Users ↓↓↓
  async function GetUsers() {
    try {
      const { data } = await axios.get(`${url}/user`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  
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
      const { data } = await axios.delete(`${url}/user/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  // Tabla de productos = Admin Page     

// Tabla de productos = Admin Page     

const [formProduct, setFormProduct] = useState({});

function OnChangeProduct(e) {
  const { name, value } = e.target;
  const response = {
    ...formProduct,
    [name]: value,
  };
  setFormProduct(response);
  console.log(response)
}

async function MethodPostProduct(e) {
  try {
    const response = await axios.post(`${url}/product`,formProduct,{headers});
    console.log(response)
    window.location.reload();
    alert("Producto añadido con exito");
  } catch (error) {
    console.error(error);

  }
}

async function deletProduct(id) {
  try {
    const { data } = await axios.delete(`${url}/product/${id}`,formProduct,{headers});
    alert("Producto eliminado con exito");
  } catch (error) {
    console.error(error);
  }
}

  return {
    data,
    GetUsers,
    Register,
    OnChange,
    deletUser,
    OnChangeProduct,
    MethodPostProduct,
    headers,
    token,
    deletProduct
  };
}
export default useAdmin;

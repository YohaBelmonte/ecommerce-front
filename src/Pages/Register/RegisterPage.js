import "./RegisterPage.css"
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {

  const [form, setForm] = useState({});

  var url = "http://localhost:4000/api";

  function OnChange(e) {
    const { name, value, } = e.target;
    const response = {
      ...form, [name]: value,
    };
    setForm(response);
  }


  async function Register() {

    try {
      const response = await axios.post(`${url}/user`, form);
      alert("se registro con exito")
      window.location.href = "/login"

    } catch (error) {

      console.error(error)
    }

  }

  return (

    <div className="d-flex justify-content-center bg-dark registerImage">
      <Form className="col-lg-3 col-sm-6 my-4 bg-light px-5 py-4">
        <p className="text-center">Mi Cuenta</p>
        <div className="text-center">
          <Link
            className="fs-4 text-decoration-none text-secondary m-4"
            id="register_login"
            to="/Login"
          >
            Login
          </Link>
          <Link
            className="fs-4 text-decoration-none text-secondary m-4"
            id="register_login"
            to="/register"
          >
            Registrarse
          </Link>
        </div>

        <Form.Group className="my-5">
          <Form.Control className="border-bottom border-0 bg-light rounded-0 fs-5 " name="name" placeholder="Name" onChange={OnChange}
          />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control className="border-bottom border-0 bg-light rounded-0 fs-5 " type="email" name="email" placeholder="Email" onChange={OnChange} />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control className="border-bottom border-0 bg-light rounded-0 fs-5 " type="password" name="password" placeholder="Password" onChange={OnChange} />
        </Form.Group>
        <div className="d-flex justify-content-center ">
          <Button className=" btn  btn-dark w-100  rounded-0 fs-5" onClick={Register}>Registrarse</Button>
        </div>
      </Form>
    </div>
  );
}

export default RegisterPage;
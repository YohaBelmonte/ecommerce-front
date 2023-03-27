import "./RegisterPage.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarLogin from "../../components/Navbar/NavbarLogin";
import FooterComponent from "../../components/Footer/Footer";

function RegisterPage() {
  const [form, setForm] = useState({});

  var url = "https://jymd-ca6s.onrender.com/api";

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
      alert("se registro con exito");
      window.location.href = "/login";
    } catch (error) {
      alert("Complete sus datos");
      console.error(error);
    }
  }

  return (
    <div>
    <div>
      <NavbarLogin />
    </div>
    <div className="d-flex justify-content-center bg-dark imageBackground">
      <Form className="form-register col-lg-3 col-sm-6 px-5 py-4">
        <p className="text-center">Registrarse</p>
        <div className="text-center">
          <Link
            className="fs-4 text-decoration-none text-secondary m-4"
            id="register_login"
            to="/Login"
          >
            Ir a Login
          </Link>
         
        </div>

        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            name="name"
            placeholder="Nombre"
            onChange={OnChange}
          />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            type="email"
            name="email"
            placeholder="Email"
            onChange={OnChange}
          />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={OnChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center ">
          <Button
            className=" btn  btn-register w-100  rounded-0 fs-5"
            onClick={Register}
          >
            Registrarse
          </Button>
        </div>
      </Form>
    </div>
    <FooterComponent />
  </div>
);
}

export default RegisterPage;

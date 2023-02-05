import "./LoginPage.css";
import { Form, Button, FormText } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import React from "react";

function LoginPage() {
  const [form, setForm] = useState({});

  function OnChange(e) {
    const { name, value } = e.target;
    const response = {
      ...form,
      [name]: value,

    };
    setForm(response);
    console.log(OnChange)
  }

  async function Login() {
    try {
      const { data } = await axios.post("http://localhost:4000/api/auth", form);
      console.log(data);
      localStorage.setItem("token", data);

      window.location.href = "/";
    } catch (error) {
      console.error("error");
      alert("Error de sesion");
    }
  }
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <div className="d-flex justify-content-center bg-dark LoginImage">
      <Form className="col-lg-3 col-sm-6 my-4 bg-light px-5 py-4">
        <p className="text-center">Mi Cuenta</p>
        <div className="">
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
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            type="email"
            name="email"
            placeholder="email"
            onChange={OnChange}
          />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            type="password"
            name="password"
            placeholder="password"
            onChange={OnChange}
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="link" className=" fs-5 text-decoration-none m-0" onClick={() => setModalShow(true)}>
            Olvidé mi contraseña
          </Button>
        </div>

        <div className="d-flex justify-content-center ">
          <Button
            className=" btn  btn-dark w-100  rounded-0 fs-5"
            variant="primary"
            onClick={Login}
          >
            Login
          </Button>
        </div>
      </Form>

      <ForgotPassword
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
}

export default LoginPage;

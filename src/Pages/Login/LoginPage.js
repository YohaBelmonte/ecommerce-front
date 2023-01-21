import "./LoginPage.css";
import { Form, Button, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({});

  function OnChange(e) {
    const { name, value } = e.target;
    const response = {
      ...form,
      [name]: value,
    };
    setForm(response);
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

  return (
    <div className="d-flex justify-content-center bg-dark LoginImage">
      <Form className="col-lg-3 col-sm-6 my-4 bg-light px-5 py-4">
        <p className="text-center">Mi Cuenta</p>
        <div className="d-flex justify-content-around my-4">
          <Link
            className="fs-4 text-secondary "
            id="register_login"
            to="/Login"
          >
            Login
          </Link>
          <Link
            className="fs-4  text-secondary"
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
        <p className="btn-link fs-5 text-decoration-none d-flex justify-content-end">
          olvide mi contraseña
        </p>

        <div className="d-flex justify-content-center ">
          <Button
            className="text-light w-100 mt-4 "
            variant="primary"
            onClick={Login}
          >
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;

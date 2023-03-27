import "./ContactInput.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import React from "react";

function ContactInput() {
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

  async function Send() {
    try {
      const token = localStorage.getItem("token") ?? "";
      const headers = { "x-auth-token": token };
      const response = await axios.post(`${url}/email`, form, { headers });
      alert("Mail enviado con exito");
      // window.location.href = "/"
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="d-flex justify-content-center ContactInput py-5">
      <Form className="col-lg-6 col-sm-6 ">
        <p className="text-center">Contacto</p>

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
            type="text"
            name="title"
            placeholder="Titulo"
            onChange={OnChange}
          />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5"
            type="text"
            name="description"
            placeholder="Mensaje"
            onChange={OnChange}
            as="textarea"
          />
        </Form.Group>

        <div className="d-flex justify-content-center ">
          <Button
            className=" btn  btn-dark w-100  rounded-0 fs-5"
            variant="primary"
            onClick={Send}
          >
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactInput;

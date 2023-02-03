import "./NewPassword.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function NewPassword() {
 
    function Mensaje() {
        alert('Se cambió la contraseña con éxito')
    }
  return (
    <div className="d-flex justify-content-center bg-dark LoginImage">
      <Form className="col-lg-3 col-sm-6 my-4 bg-light px-5 py-4">
        <p className="text-center">Nueva Contraseña</p>
    
        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            type="password"
            name="password"
            placeholder="Ingrese su nueva contraseña"
         
          />
        </Form.Group>
        <Form.Group className="my-5">
          <Form.Control
            className="border-bottom border-0 bg-light rounded-0 fs-5 "
            type="password"
            name="password"
            placeholder="Confirme su nueva contraseña"
         
          />
        </Form.Group>
    

        <div className="d-flex justify-content-center ">
          <Button
            className=" btn  btn-dark w-100  rounded-0 fs-5"
            variant="primary"
            to='/'
            onClick={Mensaje}
          >
            Enviar
            
          </Button>
        </div>
      </Form>

    
    </div>
  );
}

export default NewPassword;

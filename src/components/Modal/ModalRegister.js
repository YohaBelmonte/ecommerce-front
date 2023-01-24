import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
//  import axios from "axios";

function ForgotPassword({show, handleClose}) {

    //  var url = "http://localhost:4000/api";
    const [form, setForm] = useState({});

    function OnChange(e) {
        const { name, value, } = e.target;
        const response = {
          ...form, [name]: value,
        };
        setForm(response);
        
      }

      async function SendEmail() {

         try {
        //  const response = await axios.post(`${url}/user`, form)
        //  console.log(response)
        handleClose()
        alert("Se envió un correo a la casilla ingresada")
        window.location.href = "/NewPassword";
          
         } catch (error) {
    
           console.error(error)
         }
      console.log(form)
      }

   
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='col-8'>
            Recuperación de contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="px-5 py-4">
<p className='fs-4'> <light>Ingrese la cuenta de email a la que desea que se envíe la información para la recuperación de su contraseña.</light> </p>
        <Form.Group className="my-5">
          <Form.Control className="border-bottom border-0 rounded-0 fs-5 " type="email" name="email" placeholder="Email" onChange={OnChange} />
        </Form.Group>
       
        <div className="d-flex justify-content-center ">
          <Button className=" btn  btn-dark w-100  rounded-0 fs-5" onClick={SendEmail}>Enviar</Button>
        </div>
      </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
  );
}

export default ForgotPassword;
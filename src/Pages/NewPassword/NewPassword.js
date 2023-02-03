import "./NewPassword.css"
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import React from "react";

function NewPassword() {

    const [update, setForm] = useState({});

    function OnChange(e) {
        const { name, value, } = e.target;
        const response = {
            ...update,
            [name]: value,
        };
        setForm(response);
        console.log(response)

    }
       
        return (

            <div className="d-flex justify-content-center bg-dark LoginImage">
                <Form className="col-lg-3 col-sm-6 my-4 bg-light px-5 py-4" action="#">
                    <p className="text-center">Nueva Contraseña</p>

                    <Form.Group className="my-5">
                        <input id="1" className="border-bottom border-0 bg-light rounded-0 fs-6 " type="password" name="Password" placeholder="Nueva Contraseña" onChange={OnChange}></input>

                    </Form.Group>
                    <Form.Group className="my-5">
                    <input id="2" className="border-bottom border-0 bg-light rounded-0 fs-6 " type="password" name="Password" placeholder="Nueva Contraseña" onChange={OnChange}></input>
                    </Form.Group>

                    <div className="d-flex justify-content-center ">
                        <Button className=" btn  btn-dark w-100  rounded-0 fs-5" type="submit">Enviar</Button>
                    </div>
                </Form>
            </div>
        );
    
}

export default NewPassword;
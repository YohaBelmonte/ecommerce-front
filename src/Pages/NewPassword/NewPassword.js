import "./NewPassword.css"
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

function NewPassword() {

    const [form, setForm] = useState({});

    function OnChange(e) {
        const { name, value, } = e.target;
        const response = {
            ...form,
            [name]: value,
        };
        setForm(response);

    }
                                                    
    // async function Login() {
    //     try {
    //         const {data} = await axios.post(`http://localhost:4000/api/auth`, form)

    //         localStorage.setItem('token', data)

    //         window.location.href = '/'
    //     } catch (error) {
    //         console.error('error')

    //     }
    // }

    return (

        <div className="d-flex justify-content-center bg-dark LoginImage">
            <Form className="col-lg-3 col-sm-6 my-4 bg-light px-5 py-4">
                <p className="text-center">Nueva Contraseña</p>

                <Form.Group className="my-5">
                    <Form.Control className="border-bottom border-0 bg-light rounded-0 fs-6 " type="password" name="Password" placeholder="Nueva Contraseña" onChange={OnChange} />
                </Form.Group>
                <Form.Group className="my-5">
                    <Form.Control className="border-bottom border-0 bg-light rounded-0 fs-6 " type="password" name="Password" placeholder="Confirmación de contraseña" onChange={OnChange} />
                </Form.Group>

                <div className="d-flex justify-content-center ">
                    <Button className=" btn  btn-dark w-100  rounded-0 fs-5" type="submit" >Enviar</Button>
                </div>
            </Form>
        </div>
    );
   
}

export default NewPassword;
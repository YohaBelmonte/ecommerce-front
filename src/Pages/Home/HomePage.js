import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



function HomePage() {

    return (

        
        //home de prueba ↓↓↓↓ para ver si andaba el router y el register , login   ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓ 



        <div className="d-flex justify-content-center bg-dark ">

            <div className="d-grid">
                <div className="bg-success"> Bienvenido a la Home Page</div>
                <Button className=" w-100 mt-1 " variant="success">
                    <Link id="register_login" to="/Login">Login</Link>
                </Button>
                <Button className=" w-100 mt-1 " variant="success">
                    <Link id="register_login" to="/register">Registrarse</Link>
                </Button>
            </div>
        </div >
    );
}

export default HomePage;


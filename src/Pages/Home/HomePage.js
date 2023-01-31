import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CardShoes from "../../components/CardShoes/CardShoes";
import useHome from "../../Utils/useHome";

function HomePage() {

//hook
const { MapProduct } = useHome();

  return (
    //home de prueba ↓↓↓↓ para ver si andaba el router y el register , login   ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓
    <div>
      <div className="d-grid justify-content-center bg-dark ">
        <div className="bg-success"> Bienvenido a la Home Page</div>
        <Button className=" w-100 mt-1 " variant="success">
          <Link id="register_login" to="/Login">
            Login
          </Link>
        </Button>
        <Button className=" w-100 mt-1 " variant="success">
          <Link id="register_login" to="/register">
            Registrarse
          </Link>
        </Button>
      </div>

      <div className="d-flex flex-column-reverse MapProductContainer">
        {MapProduct}
      </div>
    </div>
  );
}

export default HomePage;



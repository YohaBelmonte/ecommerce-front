// import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHome from "../../Utils/useHome";
import NavBarComponent from "../../components/Navbar/Navbar";

function HomePage() {

//hook
  return (
    //home de prueba ↓↓↓↓ para ver si andaba el router y el register , login   ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓
    <div>
      <NavBarComponent/>
      <div className="d-flex flex-column-reverse MapProductContainer">
        {useHome()}
      </div>
    </div>
  );
}

export default HomePage;

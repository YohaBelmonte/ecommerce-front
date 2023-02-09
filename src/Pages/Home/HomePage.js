// import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useHome from "../../Utils/useHome";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useEffect } from "react";

function HomePage() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  useEffect(() => {
    GetAdminUser();
  }, []);

  const url = "http://localhost:4000/api";

  // Method Get Admin User ↓↓↓
  async function GetAdminUser() {
    try {
      const { data } = await axios.get(`${url}/user/activeUser`, {headers});
    //  console.log(data)
     if (data.isAdmin == true){ 
       localStorage.setItem("admin", data.isAdmin)
     }
    } catch (error) {
      console.error(error);
    }
  }

//hook
  return (
    //home de prueba ↓↓↓↓ para ver si andaba el router y el register , login   ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓
    <div>
      <NavBarComponent/>
      <div className="d-flex flex-column-reverse MapProductContainer">
        {useHome()}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

  

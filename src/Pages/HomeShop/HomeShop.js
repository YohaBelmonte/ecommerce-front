// import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeShop.css";
import useHome from "../../Utils/useHome";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useEffect } from "react";

function HomePage() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  const url = "http://localhost:4000/api";
  
  //hook
  const { MapProduct } = useHome();
  const { cart } = useCart();

  useEffect(() => {
    GetAdminUser();
    LogOut();
  }, []);


  async function LogOut() {
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      window.location.href = "/login";
    }
  }

  // Method Get Admin User ↓↓↓
  async function GetAdminUser() {
    try {
      const { data } = await axios.get(`${url}/user/activeUser`, { headers });
      //  console.log(data)
      if (data.isAdmin == true) {
        localStorage.setItem("admin", data.isAdmin)
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    //home de prueba ↓↓↓↓ para ver si andaba el router y el register , login   ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓  ↓↓↓↓
    <div>
      <NavBarComponent size={cart.length} />
      <div className="containerCards">
        <div className="row">
          <div className="col-10 d-flex flex-wrap ">
            {MapProduct}
          </div>
          <div className="col-sm-none col-lg-2">
            <div className="advertising2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;


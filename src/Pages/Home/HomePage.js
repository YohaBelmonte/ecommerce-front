// import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import useHome from "../../Utils/useHome";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ComponentHome from "../../components/ComponentHome/ComponentHome";
import axios from "axios";
import { useEffect } from "react";

function HomePage() {
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

  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  const url = "http://localhost:4000/api";

  //hook
  const { MapProduct } = useHome();
  const { cart } = useCart();

  // Method Get Admin User ↓↓↓
  async function GetAdminUser() {
    try {
      const { data } = await axios.get(`${url}/user/activeUser`, { headers });
      if (data.isAdmin == true) {
        localStorage.setItem("admin", data.isAdmin);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <NavBarComponent size={cart.length} />
      <ComponentHome />
      <Footer />
    </div>
  );
}

export default HomePage;

// import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
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

  const url = "https://jymd-ca6s.onrender.com/api";

  //hook
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

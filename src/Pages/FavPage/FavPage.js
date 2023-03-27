import "./FavPage.css";
import { useEffect, useState } from "react";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Button from "react-bootstrap/Button";
import CreditCard from "../../components/CreditCard/CreditCard";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  var url = "https://jymd-ca6s.onrender.com/api";

  //hook
  const favCart = JSON.parse(localStorage.getItem("fav")) || [];

  useEffect(() => {
    LogOut();
  });

  async function LogOut() {
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      window.location.href = "/login";
    }
  }
  
  async function removeToFav(id) {
    favCart.map((item) => {
        if (item._id == id) {
            favCart.splice(id, 1);
            localStorage.setItem("fav", JSON.stringify(favCart))
    }})
    window.location.reload()
  }

  return (
    <div className="shop-container">
      <NavBarComponent />
      <div className=" fav-container nowrap">
        <div className="fav-title">
          <span>FAVORITOS</span>
          <span>
            <Link to="/shop" className="">
              VOLVER AL SHOP
            </Link>
          </span>
        </div>
        <div className=" products-container">
          {favCart?.map((item, i) => {
            return (
              <div className="cart_box" key={i}>
                <div className="cart_img">
                  <img src={item.image} />
                  <p>{item.name}</p>
                </div>
                <div>
                  <button className="removeToFav" onClick={() => removeToFav(item._id)}>Eliminar favorito</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShoppingCart;

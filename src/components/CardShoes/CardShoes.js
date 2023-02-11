import "./CardShoes.css";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";
import useCart from "../../Utils/useShoppingCart";

function CardShoes({
  propName,
  propImage,
  propDescription,
  propRating,
  propPrice,
  propId,
  propItem,
}) {

  //ADD TO CART
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  var url = "http://localhost:4000/api";

  //hook
  const { cart } = useCart();

  async function addToCart() {
    let isPresent = false;
    try {
      cart.map((item) => {
        if (item._id === propId)
        isPresent = true;
      })
      if (isPresent){
        alert("YA ESTA EN EL CARRITO MAN");
      }else {
        const response = await axios.put(`${url}/product/add/${propId}`,{},{headers});
      }
      // console.log(cart);
    } catch (error) {
      console.error(error);
    }
  }

  //ADD TO FAV
  const [isFavActive, setIsFavActive] = useState(false);

  //--- ↓ agregar al array un nuevo producto
  async function wishList() {
    const favCart = JSON.parse(localStorage.getItem("fav")) || [];
    if (isFavActive == false) {
      setIsFavActive(true);
      favCart.push(propItem);
      //↓ El "fav" que se escribe es para identificarlo en el inspeccionar elemento-Application
      localStorage.setItem("fav", JSON.stringify(favCart));
      alert("Agregado a Favoritos");
    } else {
      setIsFavActive(false);
      favCart.splice(propId, 1)
      localStorage.setItem("fav", JSON.stringify(favCart));
      alert("Eliminado de Favoritos");
    }
    console.log(isFavActive);
  }


  return (
    <>

      <div className="box">
        <div className="card">
          <span
            id="heart"
            className={`heart${isFavActive ? "-active" : ""}`}
          >
            <i onClick={() => wishList()}>
              <AiTwotoneHeart />
            </i>
          </span>
          <img src={propImage} />
          <div className="card-title-wrapper">
            <center>
              <h5 className="card-title">{propName}</h5>
            </center>
          </div>
          <div className="card-body">
            <a className="btn-card" href="#" onClick={() => addToCart()}>
              <center className="tocart">Add To Cart</center>
            </a>
            <a className="btn-card1" href="#" >
              <u className="seemore">See more</u>
            </a>

            {/* <a href="#" onClick={() => removeToCart()}>
            <center>Remove to cart</center>
          </a> */}
          </div>
          <h2 className="buy">$ {propPrice}</h2>
        </div>
      </div>
    </>
  );
}

export default CardShoes;

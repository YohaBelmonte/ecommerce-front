import "./CardShoes.css";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";
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

  async function addToCart() {
    try {
      const response = await axios.put(`${url}/product/add/${propId}`, {}, { headers });
      alert("Producto agregado con exito");
      console.log(response);
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
    } else {
      setIsFavActive(false);
      favCart.splice(propId, 1)
      localStorage.setItem("fav", JSON.stringify(favCart));
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
            <h2 className="buy">$100</h2>

            {/* <a href="#" onClick={() => removeToCart()}>
            <center>Remove to cart</center>
          </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardShoes;

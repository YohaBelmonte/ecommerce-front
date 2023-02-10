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


  //ADD TO CART
  async function addToCart() {
    let isPresent = false;
    try {
      cart.map((item) => {
        if (item._id === propId)
        isPresent = true;
      })
      if (isPresent){
        alert("Ya fue agregado al carrito");
      }else {
        const response = await axios.put(`${url}/product/add/${propId}`,{},{headers});
        alert("Agregado al carrito");
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
    } else{
      setIsFavActive(false);
      favCart.splice(propId, 1)
      localStorage.setItem("fav", JSON.stringify(favCart));
    }
    console.log(isFavActive);
  }


  //VIEW SHOE PAGE
  async function viewShoePage(propId) {
    try {
      localStorage.setItem("selectShoe",propId)
      window.location.href ="/Shoe"
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div id="toast"></div>
      <div id="toast-cart"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="m-0 card">
              <span
                id="heart"
                className={`heart${isFavActive ? "-active" : ""}`}
              >
                <i onClick={() => wishList()}>
                  <AiTwotoneHeart />
                </i>
              </span>
              <img src={propImage}/>
              <div className="card-body">
                <a href="#" onClick={() => addToCart()}>
                  <center>Add to cart</center>
                </a>
                <a href="#" onClick={() => viewShoePage(propId)}>
                  <center>View More</center>
                </a>
                <center>
                  <h5 className="card-title">{propName}</h5>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardShoes;

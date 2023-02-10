import "./CardToCart.css";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";
import useCart from "../../Utils/useShoppingCart";

function CardToCart({
  propName,
  propImage,
  propDescription,
  propRating,
  propPrice,
  propId,
  propItem,
  propQuantity
}) {
  //ADD TO CART
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  var url = "http://localhost:4000/api";

  //hook
  const { cart } = useCart();

  async function removeToCart() {
    try {
      const response = await axios.put(
        `${url}/product/remove/${propId}`,
        {},
        { headers }
      );
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
      favCart.splice(propId, 1);
      localStorage.setItem("fav", JSON.stringify(favCart));
    }
    console.log(isFavActive);
  }

  return (
    <div className="container" >
      <div className="cart_box" key={propId}>
        <div className="cart_img">
          <img src={propImage} />
          <p>{propName}</p>
        </div>
        <div>
          <span id="heart" className={`heart${isFavActive ? "-active" : ""}`}>
            <i onClick={() => wishList()}>
              <AiTwotoneHeart />
            </i>
          </span>
        </div>
        <div>
          <button onClick={() => handleChange(item, +1)}> + </button>
          <button>{propQuantity}</button>
          <button onClick={() => handleChange(item, -1)}> - </button>
        </div>
        <div>
          <span>{propPrice}</span>
          <button onClick={() => removeToCart()}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CardToCart;

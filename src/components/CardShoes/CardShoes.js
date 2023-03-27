import "./CardShoes.css";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { BiMessageError } from "react-icons/bi";
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
  const [warning, setWarning] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  var url = "https://jymd-ca6s.onrender.com/api";

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
        setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          }, 2000);
			  return ;
      }else {
        const response = await axios.put(`${url}/product/add/${propId}`,{},{headers});
        setAddSuccess(true);
          setTimeout(()=>{
            setAddSuccess(false);
          }, 2000);
        // alert("Agregado con EXITO")
      }

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
  }

  //VIEW SHOE PAGE
  async function viewShoePage(id) {
    try {
      localStorage.setItem("selectShoe",id)
      window.location.href ="/shoePage"
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      {warning && <div className='warning'> <BiMessageError />ERROR! Ya fue agregado al carrito</div>}
      {addSuccess && <div className='success'> <BiMessageError />Agregado con EXITO!</div>}
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
              <center className="tocart">Añadir al carrito</center>
            </a>
            <a className="btn-card1" href="#" >
              <u className="seemore" onClick={() => viewShoePage(propId)}>Ver más</u>
            </a>
          </div>
          <h2 className="buy">$ {propPrice}</h2>
        </div>
      </div>
    </>
  );
}

export default CardShoes;

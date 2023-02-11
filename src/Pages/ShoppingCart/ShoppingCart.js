import "./ShoppingCart.css";
import { useEffect, useState } from "react";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreditCard from '../../components/CreditCard/CreditCard'

function ShoppingCart() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  var url = "http://localhost:4000/api";
  const [price, setPrice] = useState(0);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    handlePrice();
  });

  //hook
  const { CartProducts, cart, setCart } = useCart();

  async function handleRemove(id) {
    const arr = cart.filter((item) => item._id !== id);
    const response = await axios.put(`${url}/product/remove/${id}`, {}, { headers });
    setCart(arr);
    console.log(arr);
  }


  const handlePrice = () => {
    let ans = 0;
    // cart.map((item) => (ans += item.quantity * item.price));
    cart.map((item) => (ans += item.price));
    setPrice(ans);
  };


  return (
    <div className="shop-container">
      <NavBarComponent />
      <div className=" cart-container nowrap">
        <div className="cart-title">
          <span>Carrito de compras</span>
        </div>
        <div className=" products-container">
          {cart?.map((item, i) => (
            <div className="cart_box" key={i}>
              <div className="cart_img">
                <img src={item.image} />
                <p>{item.name}</p>
              </div>

              <div>
                <button> - </button>
                <button>{item.quantity}</button>
                <button > + </button>
              </div>
              <div>
                <span>$ {item.price}</span>
                <button onClick={() => handleRemove(item._id)} >Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total  text-end ">

          <span className="mt-4 mx-5">Total</span>
          <span className="mt-4 mx-5">${price}</span>
        </div>
        {/* Modal */}
        <>
          <div>
            <button className="custom-btn btn-5" onClick={() => setLgShow(true)}>COMPRAR</button>
          </div>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body> <CreditCard /></Modal.Body>
          </Modal>
        </>
      </div>
      <Footer />
    </div>
  );
}
export default ShoppingCart;

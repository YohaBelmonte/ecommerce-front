import "./ShoppingCart.css";
import { useEffect, useState } from "react";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import CreditCard from "../../components/CreditCard/CreditCard";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  var url = "http://localhost:4000/api";
  const [price, setPrice] = useState(0);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    handlePrice();
    LogOut();
  });

  async function LogOut() {
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      window.location.href = "/login";
    }
  }

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //hook
  const { CartProducts, cart, setCart } = useCart();

  //ELIMINAR DEL CARRITO
  async function handleRemove(id) {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    const { data } = await axios.put(
      `${url}/product/remove/${id}`,
      {},
      { headers }
    );
  }

  //TOTAL DE ORDEN
  const handlePrice = () => {
    let ans = 0;
    // cart.map((item) => (ans += item.quantity * item.price));
    cart.map((item) => (ans += item.quantity *item.price));
    setPrice(ans);
  };

  //Contador
  const [quantity, setQuantity] = useState(1);

  const quantityChange = (value, d) => {
    let result = cart.map((item) => {
      if (value == item._id) {
        if (d == true) {
          item.quantity = item.quantity + 1;
        } else {
          item.quantity = item.quantity - 1;
        }
        return item;
      } else {
        return item;
      }
    });
    setCart(result);
  };

  return (
    <div className="shop-container">
      <NavBarComponent />
      <div className=" cart-container nowrap">
        <div className="cart-title">
          <span>CARRITO DE COMPRAS</span>
          <span>
            <Link to="/shop" className="">
              VOLVER AL SHOP
            </Link>
          </span>
        </div>
        <div className=" products-container">
          {cart?.map((item, i) => {
            return (
              <div className="cart_box" key={i}>
                <div className="cart_img">
                  <img src={item.image} />
                  <p>{item.name}</p>
                </div>
                <div>
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => quantityChange(item._id, false)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button>{item.quantity}</button>
                  <button
                    disabled={item.quantity >= item.countInStock}
                    onClick={() => quantityChange(item._id, true)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div>
                  <span>$ {item.price}</span>
                  <button onClick={() => handleRemove(item._id)}>Eliminar</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total  text-end ">
          <span className="mt-4 mx-5">Total</span>
          <span className="mt-4 mx-5">${price}</span>
        </div>
        {/* Modal */}

        <>
          <div>
            <button className="custom-btn btn-5" onClick={() => setShow(true)}>
              COMPRAR
            </button>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            backdrop="static"
          >
            <Modal.Header closeButton className="bg-dark text-white">
              <Modal.Title className="d-flex justify-content-center w-100">
                Insertar datos de la tarjeta
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreditCard />
            </Modal.Body>
          </Modal>
        </>
      </div>
      <Footer />
    </div>
  );
}
export default ShoppingCart;



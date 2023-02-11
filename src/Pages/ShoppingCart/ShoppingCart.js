import "./ShoppingCart.css";
import { useEffect, useState } from "react";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ShoppingCart() {

  const [price, setPrice] = useState(0);

  useEffect(() => {
    handlePrice();
  });

  //hook
  const { CartProducts, cart } = useCart();


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
        <div className=" products-container">{CartProducts}</div>
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>USD {price}</span>
        </div>
        <div>
        <button className="buy">COMPRAR</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShoppingCart;

import "./ShoppingCart.css";
import useCart from "../../Utils/useShoppingCart";
import NavBarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ShoppingCart() {
  //hook
  const { CartProducts } = useCart();

  return (
    <div className="shop-container">
      <NavBarComponent />
      <div className=" cart-container nowrap">
        <div className="cart-title">
          <span>Carrito de compras</span>
        </div>
        <div className=" products-container">
          {CartProducts}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShoppingCart;

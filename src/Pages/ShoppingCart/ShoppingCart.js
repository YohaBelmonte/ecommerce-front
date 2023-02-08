import "./ShoppingCart.css";
import useHome from "../../Utils/useHome";

function ShoppingCart() {
  //hook
  const { CartProducts } = useHome();

  return (
    <div className="shop-container">
      <div className="cart-container">
        <div className="cart-title">
          <span>Carrito de compras</span>
        </div>
        {/* {CartProducts} */}
      </div>
    </div>
  );
}
export default ShoppingCart;

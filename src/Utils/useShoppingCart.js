import { useEffect, useState } from "react";
import axios from "axios";
import CardShoes from "../../src/components/CardShoes/CardShoes";



function useCart() {
    const token = localStorage.getItem("token") ?? "";
    const headers = { "x-auth-token": token };
    const [cart, setCart] = useState([]);
    var url = "http://localhost:4000/api";

  useEffect(() => {
    GetCartProducts();
  }, []);

     // Method Get Cart ↓↓↓
    async function GetCartProducts() {
        try {
            const { data } = await axios.get(`${url}/product/cart`, { headers })
            setCart(data)
        } catch (error) {
            console.error(error);
        }
    }
    console.log(cart)
  
//   // Para mostrar en el Cart ↓
  const CartProducts = cart.map((item, i) => (
    <CardShoes
      key={i}
      propName={item.name}
      propImage={item.image}
      propDescription={item.description}
      propRating={item.rating}
      propPrice={item.price}
      propId={item._id}
      propItem={item}
    />
  ));

  return {
    CartProducts,
  };
}
export default useCart;
import { useEffect, useState } from "react";
import axios from "axios";
import CardToCart from "../../src/components/CardToCart/CardToCart";



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
    
  
// Para mostrar en el Cart ↓
  const CartProducts = cart?.map((item, i) => (
    <CardToCart
      key={i}
      propName={item.name}
      propImage={item.image}
      propDescription={item.description}
      propRating={item.rating}
      propPrice={item.price}
      propId={item._id}
      propItem={item}
      propQuantity={item.quantity}
    />
  ));

  return {
    CartProducts,
    cart,
    setCart
  };
}
export default useCart;

















// Method Get Admin User ( filtrar el usuario si su atributo isAdmin=true) ↓↓↓
    //  async function GetAdminUser() {
    //     try {
    //       const { data } = await axios.get(`${url}/user`);
    //     //   const adminUser = data.map((data) => data.isAdmin);
    //       const adminUser = data.filter((data) => data.isAdmin ===true);
    //       setAdmin(adminUser);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
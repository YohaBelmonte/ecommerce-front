import { useState, useEffect } from "react";
import axios from "axios";
import CardShoes from "../../src/components/CardShoes/CardShoes";

function UseHome() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  const [product, setproduct] = useState([]);
  const [cart, setCart] = useState({});
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    GetProduct();
    GetCartProducts();
    GetAdminUser();
  }, []);

  const url = "http://localhost:4000/api";

   // Method Get all products ↓↓↓
  async function GetProduct() {
    try {
      const { data } = await axios.get(`${url}/product`, { headers });
      // console.log(data)
      setproduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Method Get Admin User ↓↓↓
  async function GetAdminUser() {
    try {
      const { data } = await axios.get(`${url}/user`);
    //   const adminUser = data.map((data) => data.isAdmin);
      const adminUser = data.filter((data) => data.isAdmin ===true);
      setAdmin(adminUser);
    } catch (error) {
      console.error(error);
    }
  }

   // Method Get Cart ↓↓↓
  async function GetCartProducts() {
      try {
          const { data } = await axios.get(`${url}/product/cart`, { headers })
          setCart(data)
          // console.log(data)
      } catch (error) {
          console.error(error);
      }
  }


  const MapProduct = product.map((item, i) => (
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

  // Para mostrar en el Cart ↓
  // const CartProducts = cart.map((item, i) => (
  //   <CardShoes
  //     key={i}
  //     propName={item.name}
  //     propImage={item.image}
  //     propDescription={item.description}
  //     propRating={item.rating}
  //     propPrice={item.price}
  //     propId={item._id}
  //     propItem={item}
  //   />
  // ));

  return {
    MapProduct,
    admin
    // CartProducts
  };
}
export default UseHome;

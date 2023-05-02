
import { useState, useEffect } from "react";
import axios from "axios";
import CardShoes from "../../src/components/CardShoes/CardShoes";

function UseHome() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  const [product, setproduct] = useState([]);
  const url = "https://jymd-ca6s.onrender.com/api";

  
  useEffect(() => {
    GetProduct();
  }, []);

   // Method Get all products ↓↓↓
  async function GetProduct() {
    try {
      const { data } = await axios.get(`${url}/product`, { headers });
      setproduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  const MapProduct = product.map((item, i) => (
    <div className="col-10 col-md-3 col-lg-2 m-1 m-md-1 m-lg-2 d-flex justify-content-center" key={i}>
      <CardShoes
        propName={item.name}
        propImage={item.image}
        propDescription={item.description}
        propRating={item.rating}
        propPrice={item.price}
        propId={item._id}
        propItem={item}
      />
    </div>
  ));

  return {
    MapProduct,
    product
  };
}
export default UseHome;

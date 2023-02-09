import "./useHome.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardShoes from "../../src/components/CardShoes/CardShoes";

function UseHome() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  const [product, setproduct] = useState([]);
  const url = "http://localhost:4000/api";

  
  useEffect(() => {
    GetProduct();
  }, []);

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

  const MapProduct = product.map((item, i) => (
    <div className="col" key={i}>
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


  return (
    <>
      <div id="toast"></div>
      <div id="toast-cart"></div>
      <div className="container">
            <div className="row">
              {MapProduct}
            </div>
          </div>
    </>
  );
}
export default UseHome;

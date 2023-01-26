import { useState, useEffect } from "react";
import axios from "axios";
import CardShoes from "../../src/components/CardPost/CardPost";
import { NavItem } from "react-bootstrap";

function UseHome(){
    const [product, setproduct] = useState([]);
    useEffect(() => {
        GetProduct();
    }, []);

  const url = "http://localhost:4000/api";

    async function GetProduct() {
        try {
          const { data } = await axios.get(`${url}/product`, { headers });
          setproduct(data);
          console.log(data)
        } catch (error) {
          console.error(error);
        }
      }

      const MapProduct= product.map((iten,i)=>(
        <CardShoes
        key={i}
        propName={item.name}
        propImage={item.image}
        propDescription={item.description}
        propRating={item.rating}
        propPrice={item.price}
        />
      ));
      return{
        MapProduct
      }
}
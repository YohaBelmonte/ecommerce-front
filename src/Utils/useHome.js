import { useContext, useState, useEffect } from "react";
import axios from "axios";
import CardShoes from "../../src/components/CardShoes/CardShoes";
// Importamos el contexto que se genero en context.js↓
import { Cartcontext } from "../Utils/Context";
import Context from "../Utils/Context";

function UseHome() {
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };
  const [product, setproduct] = useState([]);
  useEffect(() => {
    GetProduct();
  }, []);

  const { Cartcontext } = Context();

  const url = "http://localhost:4000/api";

  async function GetProduct() {
    try {
      const { data } = await axios.get(`${url}/product`, { headers });
      setproduct(data);
    } catch (error) {
      console.error(error);
    }
  };

// con esta ↓ const buscamos recuperar la info de Cartcontext creada en "Context.js"
const globalState = useContext(Cartcontext);
    // QUE SIGNIFICA ".dispatch" ↓  --> Porque solo nos interesa el dispatch que nos trae el globalstate??
const dispatch = globalState.dispatch ;

// console.log(globalState)

  const MapProduct = product.map((item, i) => ( 
    <CardShoes
      key={i}
      propName={item.name}
      propImage={item.image}
      propDescription={item.description}
      propQuantity={item.quantity}
      propRating={item.rating}
      propPrice={item.price}
      propId={item._id}
      propItem={item}
      propDispatchADD={dispatch({ type: "ADD", payload: item })}
      // propDispatchINCREASE={dispatch({ type: "INCREASE", payload: item })}
      // propDispatchDECREASE={dispatch({ type: "DECREASE", payload: item })}
      // propDispatchREMOVE={dispatch({ type: "REMOVE", payload: item })}
    />
    ));

  
// console.log(product)
  return {
    MapProduct,
  };
}
export default UseHome;

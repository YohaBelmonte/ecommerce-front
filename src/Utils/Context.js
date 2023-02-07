import {createContext, useReducer } from "react";

// con esta const ↓ llamamos a la funcion de react "createcontext" que luego le pasaremos info y luego datos
export const Cartcontext = createContext();

function Context(props) {
  
  async function reducer(state, action) {
    try {
      switch (action.type) {
        case "ADD":
          const tempstate = state.filter(
            (item) => action.payload.id === item.id
          );
          if (tempstate.length > 0) {
            return state;
          } else {
            return [...state, action.payload];
          }
        case "INCREASE":
          const tempstate1 = state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
          return tempstate1;

        case "DECREASE":
          const tempstate2 = state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
          return tempstate2;
        case "REMOVE":
            // CONSULTAR COMO SE LEE ↓
          const tempstate3 = state.filter(
            (item) => item.id !== action.payload.id
          );
          return tempstate3;

        default:
          return state;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  

  return (
    // inyectamos los provider ↓ a todos los componentes hijos de esta funcion "reducer"
    <Cartcontext.Provider value={info}>{props}</Cartcontext.Provider>
  );
}

export default Context;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="mt-5">
                <ShoppingCart />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

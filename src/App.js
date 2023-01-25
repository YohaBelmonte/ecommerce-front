import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

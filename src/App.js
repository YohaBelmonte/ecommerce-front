import './App.css';
import AboutPage from "./Pages/AboutUs/AboutUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (

    <BrowserRouter >
      <Routes>
        <Route path='/about' element={<AboutPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

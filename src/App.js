import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Pages/Admin/admin';
import Products from './Pages/Admin/Productos';
import Usuarios from './Pages/Admin/Usuarios';
import AboutUs from './Pages/AboutUs/aboutUs';
import Faq from './Pages/Admin/FAQ';
import ShoePage from './Pages/ShoePage/ShoePage';
import RegisterPage from './Pages/Register/RegisterPage';
import LoginPage from './Pages/Login/LoginPage';
import HomePage from './Pages/Home/HomePage';
import HomeShop from './Pages/HomeShop/HomeShop';
import NewPassword from './Pages/NewPassword/NewPassword';
import Contact from './Pages/Contact/Contact'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import Preloader from './components/LoadingScreen/LoadingScreen';
import Orders from './Pages/Admin/Orders';

function App() {

  useEffect(() => {
    // LogOut();
  }, []);

  async function LogOut() {
    try {
      const token = localStorage.getItem("token") ?? "";
      if (token == "") {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("no hay token");
      alert("Error de sesion");
    }
  }
  return (
    <BrowserRouter >
      <Preloader/>
      <Routes>
        <Route path='/' element={
            <div>
              <div className=''>
                <HomePage />
              </div>
          </div>
        }>
        </Route>
        <Route path='/shop' element={
            <div>
              <div className=''>
                <HomeShop />
              </div>
          </div>
        }>
        </Route>
        <Route path='/aboutUs' element={
          <div>
            <div>
              <AboutUs />
              </div>
          </div>
        }>
        </Route>
        <Route path='/Login' element={
          <div>
            <div className=''>
              <LoginPage />
            </div>
          </div>  
          }>
          </Route>
          <Route path='/Admin' element={
            <div>
              <div>
                <Admin />
              </div>
          </div>
        }>
        </Route>

        <Route path='/Contact' element={
          <div>
            <div>
              <Contact />
            </div>
          </div>
        }>
        </Route>

        <Route path='/Register' element={
          <div>
            <div className=''>
              <RegisterPage />
            </div>
            </div>
          }>
          </Route>
          <Route path='/Admin/Productos' element={
            <div>
              <div>
                <Products />
              </div>
            </div>
        }>
        </Route>
        <Route path='/cart' element={
          <div>
            <div className=''>
              <ShoppingCart/>
            </div>
          </div>
        }>
        </Route>
        <Route path='/Admin/Orders' element={
          <div>
            <div>
              <Orders />
            </div>
          </div>
        }>
        </Route>
        <Route path='/Admin/Usuarios' element={
          <div>
            <div>
              <Usuarios />
            </div>
          </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

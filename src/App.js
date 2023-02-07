
import './App.css';
import Admin from './Pages/Admin/admin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Pages/Admin/Productos';
import Usuarios from './Pages/Admin/Usuarios';
import AboutUs from './Pages/Admin/AboutUs';
import AboutUs2 from './Pages/AboutUs/aboutUs';
import Faq from './Pages/Admin/FAQ';
import ShoePage from './Pages/ShoePage/ShoePage';
import RegisterPage from './Pages/Register/RegisterPage';
import LoginPage from './Pages/Login/LoginPage';
import HomePage from './Pages/Home/HomePage';
import NewPassword from './Pages/NewPassword/NewPassword';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={
          <div>
            <div className=''>
              <HomePage />
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
        <Route path='/Admin/Productos' element={
          <div>
            <div>
              <Products />
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

        <Route path='/Admin/AboutUs' element={
          <div>
            <div>
              <AboutUs />
            </div>
          </div>
        }>
        </Route>
        <Route path='/aboutUs' element={
          <div>
            <div>
              <AboutUs2 />
              </div>
          </div>
        }>
        </Route>
        <Route path='/Login' element={
          <div>
            <div>
              <LoginPage />
            </div>
          </div>
        }>
        </Route>

        <Route path='/Admin/Faq' element={
          <div>
            <div>
              <Faq />
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

        <Route path='/NewPassword' element={
          <div>
            <div className=''>
              <NewPassword />
            </div>
          </div>
        }>
        </Route>

        <Route path='/Shoe' element={
          <div>
            <div className=''>
              <ShoePage />
            </div>
          </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
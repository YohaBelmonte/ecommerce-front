import './App.css';
import RegisterPage from './Pages/Register/RegisterPage';
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Pages/Login/LoginPage';
import HomePage from './Pages/Home/HomePage';

function App() {

  return (

    <BrowserRouter >

      <Routes>
        <Route path='/' element={
          <div>
            <div className=''>
              <HomePage/>
            </div>
          </div>
        }>
        </Route>
        <Route path='/Login' element={
          <div>

            <div className='mt-5'>
              <LoginPage />
            </div>
          </div>
        }>
        </Route>

        <Route path='/Register' element={
          <div>

            <div className='mt-5'>
              <RegisterPage />
            </div>
          </div>
        }>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

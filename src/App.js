import './App.css';
import Admin from './Pages/Admin/admin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Pages/Admin/Productos';
import Usuarios from './Pages/Admin/Usuarios';
import Categorias from './Pages/Admin/Categorias';

function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route path='/' element={
          <div>
            <div className='mt-5'>
              <div>Hola soy homepage</div>
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

        <Route path='/Admin/Categorias' element={
          <div>
            <div>
              <Categorias />
            </div>
          </div>
        }>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

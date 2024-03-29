import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css"


function Dashboard(){
    return (
        <div className="container-fluid px-4 bg-dark  mt-5">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">1720</h3>
                <p className="fs-5">Usuarios Registrados</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">$150920</h3>
                <p className="fs-5">Ventas</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3899</h3>
                <p className="fs-5">Nuevos productos</p>
              </div>
               </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">%25</h3>
                <p className="fs-5">Incremento</p>
              </div>
              </div>
          </div>
        </div>

        <div className="row my-5">
        <div className="mb-4 text-gred text-white text-center"><h4>ACTIVIDAD RECIENTE</h4></div>
          <div className="col">
            <table className="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">#</th>
                  <th scope="col">Productos</th>
                  <th scope="col">Clientes</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Television</td>
                  <td>Jonny</td>
                  <td>$1200</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Laptop</td>
                  <td>Kenny</td>
                  <td>$750</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell Phone</td>
                  <td>Jenny</td>
                  <td>$600</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Fridge</td>
                  <td>Killy</td>
                  <td>$300</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Books</td>
                  <td>Filly</td>
                  <td>$120</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Gold</td>
                  <td>Bumbo</td>
                  <td>$1800</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Pen</td>
                  <td>Bilbo</td>
                  <td>$75</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Notebook</td>
                  <td>Frodo</td>
                  <td>$36</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Dress</td>
                  <td>Kimo</td>
                  <td>$255</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Paint</td>
                  <td>Zico</td>
                  <td>$434</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Carpet</td>
                  <td>Jeco</td>
                  <td>$1236</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Food</td>
                  <td>Haso</td>
                  <td>$422</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    )
}

export default Dashboard;
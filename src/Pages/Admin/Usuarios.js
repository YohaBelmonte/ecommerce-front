import NavBarComponent from "../../components/Navbar/Navbar";
import Sidebar from "../Admin/Sidebar/Sidebar";
import TablaUsuarios from "../../components/TablaUsuarios/TablaUsuarios";
import Footer from "../../components/Footer/Footer";
import "./admin.css";

function Usuarios() {
  return (
    <div>
      <NavBarComponent />
      <div className="d-flex m-0">
        <Sidebar />
        <TablaUsuarios />
      </div>
      <Footer />
    </div>
  );
}

export default Usuarios;

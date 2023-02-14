import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "../Admin/Sidebar/Sidebar";
import "./admin.css";
import TablaProductos from "../../components/TablaProductos/TablaProductos";
import Footer from "../../components/Footer/Footer";

function Products() {
  return (
    <div>
      <AdminNavbar />
      <div className="d-flex m-0">
        <Sidebar />
        <TablaProductos />
      </div>
      <Footer />
    </div>
  );
}

export default Products;

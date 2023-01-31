import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import "./admin.css"
import TablaProductos from "../../components/TablaProductos/TablaProductos";

function Products() {
    return (
        <div>
<AdminNavbar />
<div className="d-flex m-0">
<Sidebar/>
<TablaProductos/>
</div>

        </div>
    );
}

export default Products;
import AdminNavbar from "../../components/Navbar/Navbar";
import WithHeaderExample from "../../components/CardShoes/CardAdmin"; 
import "./admin.css"
import BasicExample from "../../components/TablaCategorias/Tabla";

function Products() {
    return (
        <div>
<AdminNavbar />
<div className="d-flex m-0">
<WithHeaderExample/>
<BasicExample/>
</div>

        </div>
    );
}

export default Products;
import AdminNavbar from "../../components/Navbar/Navbar";
import BasicExample from "../../components/TablaCategorias/Tabla";
import WithHeaderExample from "../../components/CardShoes/CardAdmin";

function Categorias() {
    return (
        <div>
            <AdminNavbar />
            <div className="d-flex">
                <WithHeaderExample />
                
                <BasicExample/>
               

            </div>

        </div>
    );
}

export default Categorias;
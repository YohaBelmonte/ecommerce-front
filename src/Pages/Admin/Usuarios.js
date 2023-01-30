import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import TablaUsuarios from "../../components/TablaUsuarios/TablaUsuarios";
import "./admin.css"

function Usuarios() {
    return (
        <div>
<AdminNavbar />
<div className="d-flex m-0">
<Sidebar/>
<TablaUsuarios/>
</div>

        </div>
    );
}

export default Usuarios;
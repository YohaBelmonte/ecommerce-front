import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "../Admin/Sidebar/Sidebar"; 
import TablaUsuarios from "../Admin/TablaUsuarios/TablaUsuarios";
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
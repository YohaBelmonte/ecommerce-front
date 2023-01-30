import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import "./admin.css"
import Dashboard from "../../components/Dashboard/Dashboard";

function Admin() {
    return (
        <div>
<AdminNavbar />
<div className="d-flex column-gap-2">
<Sidebar/>
<Dashboard/>
</div>

        </div>
    );
}

export default Admin;
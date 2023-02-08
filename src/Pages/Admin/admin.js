import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./admin.css"
import Dashboard from "../Admin/Dashboard/Dashboard";

function Admin() {
    return (
        <div>
            <AdminNavbar />
            <div className="d-flex column-gap-2">
                <Sidebar />
                <Dashboard/>
            </div>

        </div>
    );
}

export default Admin;
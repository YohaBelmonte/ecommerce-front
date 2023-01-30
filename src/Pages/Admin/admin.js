import AdminNavbar from "../../components/Navbar/Navbar";
import WithHeaderExample from "../../components/CardShoes/CardAdmin"; 
import "./admin.css"
import Dashboard from "../../components/Dashboard/Dashboard";

function Admin() {
    return (
        <div>
<AdminNavbar />
<div className="d-flex column-gap-2">
<WithHeaderExample/>
<Dashboard/>
</div>

        </div>
    );
}

export default Admin;
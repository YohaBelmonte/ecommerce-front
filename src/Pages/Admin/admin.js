import AdminNavbar from "../../components/Navbar/Navbar";
import WithHeaderExample from "../../components/CardShoes/CardAdmin"; 

function Admin() {
    return (
        <div>
<AdminNavbar />
<h1 className="bg-light text-center text-success">ADMIN MAIN PAGE</h1>
<WithHeaderExample/>
        </div>
    );
}

export default Admin;
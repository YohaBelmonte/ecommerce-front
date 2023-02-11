import AdminNavbar from "../../components/Navbar/Navbar";
import TablaOrders from "../../components/TablaOrders/TablaOrders";
import Sidebar from "../Admin/Sidebar/Sidebar"; 
import "./admin.css"



function Orders() {
    return (
        <div>
<AdminNavbar />
<div className="d-flex m-0">
<Sidebar/>
<TablaOrders/>
</div>

        </div>
    );
}

export default Orders;
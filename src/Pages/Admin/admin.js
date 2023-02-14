import AdminNavbar from "../../components/Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./admin.css";
import Dashboard from "../Admin/Dashboard/Dashboard";
import { useEffect } from "react";

function Admin() {
  useEffect(() => {
    LogOut();
  }, []);

  async function LogOut() {
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      window.location.href = "/login";
    }
  }
  return (
    <div>
      <AdminNavbar />
      <div className="d-flex column-gap-2">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Admin;

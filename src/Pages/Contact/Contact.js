import AdminNavbar from "../../components/Navbar/Navbar";
import ContactInput from "../../components/ContactInputs/ContactInput";
import FooterComponent from "../../components/Footer/Footer";
import { useEffect } from "react";

function Contact() {
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
        <div className="bg-light">
            <AdminNavbar />
            <ContactInput />
            <FooterComponent />
        </div>
    );
}

export default Contact;
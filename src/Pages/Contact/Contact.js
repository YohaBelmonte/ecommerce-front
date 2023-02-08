import AdminNavbar from "../../components/Navbar/Navbar";
import ContactInput from "../../components/ContactInputs/ContactInput";
import FooterComponent from "../../components/Footer/Footer";

function Contact() {
    return (
        <div className="bg-light">
            <AdminNavbar />

            <ContactInput />
            <FooterComponent />

        </div>
    );
}

export default Contact;
import AdminNavbar from "../../components/Navbar/Navbar";
import LoginPage from "../../components/LoginInput/LoginInput";
import FooterComponent from "../../components/Footer/Footer";
import './LoginPage.css';

function Contact() {
  return (
    <div>
      <div className="imageBackground py-3">
        <div>
        <AdminNavbar />
        </div>
     

        <LoginPage />
      </div>
      <FooterComponent />

    </div>
  );
}

export default Contact;
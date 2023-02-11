import NavbarLogin from "../../components/Navbar/NavbarLogin";
import LoginPage from "../../components/LoginInput/LoginInput";
import FooterComponent from "../../components/Footer/Footer";
import './LoginPage.css';

function Contact() {
  return (
    <div>
      <div className="imageBackground py-3">
        <div>
        <NavbarLogin />
        </div>
        <LoginPage />
      </div>
      <FooterComponent />

    </div>
  );
}

export default Contact;
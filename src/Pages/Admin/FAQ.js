import NavBarComponent from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./admin.css";
import Acordeon from "../../components/Accordion/Accordion";

function Faq() {
  return (
    <div>
      <NavBarComponent/>
      <div className="d-flex m-0">
        <Sidebar />
        <Acordeon />
      </div>
    </div>
  );
}

export default Faq;

import "./404.css"
import { Link } from "react-router-dom";


function Error() {


    return (
        <div className="errorBody">
        <div className="errorContainer">
            <h1 className="neonText">
                404 ERROR
            </h1>
            <h2 className="neonText">Page Not Found</h2>
            <h3 ><Link to="/shop" className="neonText back-404"> Volver al shop</Link></h3>
        </div>
        </div>

    )

}
export default Error;
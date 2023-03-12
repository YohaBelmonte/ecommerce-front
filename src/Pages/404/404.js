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
            <h3 className="back-404"><Link to="/shop" className="neonText"> Volver al shop</Link></h3>
        </div>
        </div>

    )

}
export default Error;
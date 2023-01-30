import './AdminIcon.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardComponents({icons}) {
    return (
        
            <div className="col-sm-4">

                <div className="daire">
                    <div className="bar">
                        <div className="bg-dark text-white">
                           {icons}
                        </div>
                    </div>
                </div>
            </div>


       
    )
}
export default CardComponents;
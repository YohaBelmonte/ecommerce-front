import "./CardShoes.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
// import { BsPencilSquare, BsChat } from "react-icons/bs";
// import { FiSend, FiHeart } from "react-icons/fi";
// import { AiOutlineRetweet } from "react-icons/ai";
import axios from "axios";

function CardShoes({propName, propImage, propDescription, propRating, propPrice}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div id="toast"></div>
      <div id="toast-cart"></div>
      {/* <div className="container"> */}
        {/* <hr> */}
        {/* <br> */}
        {/* <div className="row"> */}
          {/* <div className="col-lg-3"> */}
            <div className="m-0 card">
              <span id="heart" className="heart">
                {/* <i onclick="wishList()" className="fas fa-heart"></i> */}
              </span>
              <img src={propImage}/>
              <div className="card-body">
                <a href="#" onclick="addCart()">
                  <center>Add to cart</center>
                </a>
                {/* <hr> */}
                <center>
                  <h5 className="card-title">{propName}</h5>
                </center>
              </div>
            {/* </div> */}
          {/* </div> */}

          
        {/* </div> */}
      </div>
    </div>
  );
}

export default CardShoes;

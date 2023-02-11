import React from "react";


const OrdersProduct = (props) => {
  return (

    <div className="col-lg-4">

      <div >
        <div className=" pt-2 pb-2">
          <div>
          <h4>{props.category}</h4>
          </div>
          <div >
            <h4>{props.name}</h4>
          </div>
          <div>
            <h4>{props.quantity}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersProduct;
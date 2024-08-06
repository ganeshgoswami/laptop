import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card w-50 shadow p-3 mb-5  rounded ">
      <h1 className="text-info text-center">{props.brand}</h1>
      <img src={props.image} alt="" width="90%" height="80%" className="m-2" />
      <h3 className="text-center">{props.model}</h3>
      <div className="">
        <div className="card-body">
         {/* <div className="d-flex justify-content-between "> */}
          <p className="card-text"><b> Brand :</b> {props.brand}</p>
          <p className="card-text"> <b>Processor :</b> {props.processor}</p>
          <p className="card-text"> <b>Ram :</b> { props.ram}</p>
           <p className="card-text"> <b>HardDisk :</b> {props.hardDisk}</p>
         {/* </div> */}
         
        </div>
      </div>
      <Link  to={`/laptop/${props.model}`}>View Details </Link>
    </div>
  );
};

export default Card;

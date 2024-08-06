import React, { useContext, useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { MyContext } from "../contaxt/dataProvider";

const LaptopDetails = () =>{
    const {id} = useParams();
    const allLaptops = useContext(MyContext)
    
    const laptop = id ? allLaptops?.find((lap)=>lap.model === id) : "No Data Found" ;
    console.log(laptop)
    
return(
<div className="mt-5 p-3 d-flex justify-content-center">
<div className="card mb-3 m-3 p-4 text-center w-50 shadow p-3 mb-5 bg-body-tertiary rounded t-4">
  <h1>Best Quality Laptop of <b className="text-primary">{laptop.brand}</b> </h1>
    <div className="d-flex justify-content-center">
  <img src={laptop.image}   alt="" />
    </div>
  <div className="card-body">
    <h5 className="card-title"> Brand : {laptop.brand}</h5>
    <div className="d-flex justify-content-around">
          <p className="card-text"> <b>Processor :</b> {laptop.processor}</p>
          <p className="card-text"> <b>Ram :</b> { laptop.ram}</p>
    </div>
    <div className="d-flex justify-content-around">
           <p className="card-text"> <b>HardDisk :</b> {laptop.hardDisk}</p>
           <p className="card-text"> <b>Price :</b> {laptop.price} <del className="text-danger">{laptop.mrp}</del></p>
           <p className="card-text"> <b>Rating :</b> {laptop.rating}</p>
    </div>
  </div>
  <Link to={`/payment/${laptop.model}`}><button className="btn btn-sm btn-primary"> Buy </button></Link>
</div>
</div>
)
}

export default LaptopDetails;
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../contaxt/dataProvider";
import moment from 'moment';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const PaymentPage = () => {
  const {id} = useParams()
  const allLaptops = useContext(MyContext)
  let product = id ? allLaptops?.find((lap)=>lap.model===id) : "" ;
  const d = new Date() ;

  let now = moment()
  // const date =moment().format('DD/MMMM/YYYY');
  // const newDate =moment().format('DD');

 now.add(3,'days');
 const deleveryDate =now.format('DD')

  const month = now.format('MMMM');
  const year = now.format('YYYY');

//  const year =d.getFullYear()
  return <div className="container mt-5 p-4">
    <div className="card p-4 text-center shadow p-3 mb-5 bg-body-tertiary rounded">
      <h4>FREE delivery 
        <br /> your Order reached on : {deleveryDate}  {month} {year}
        <br /> your Order Taking Time : {3 * 24 } Hours
      
      </h4>
      <h3>Brand : {product.brand}</h3>
      <h3>Price : {product.price} <del className="text-danger">{product.mrp}</del></h3>
      <h3 className="text-success"> {product.quantity > 0 ? "InStock" : "Out Of Stock"}</h3><h3>{product.quantity}</h3>
      <div>

    <button type="button" className="btn btn-success btn-sm" disabled={product.quantity > 0 ? false : true} >Payment <br />{product.price}</button>
      </div>
    </div>
  </div>;
};

export default PaymentPage;

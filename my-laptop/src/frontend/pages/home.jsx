import React, { useContext, useEffect, useState } from "react";
import Card from "../components/card";
import LeftPanal from "../components/leftPanal";
import SideLink from "../components/sideLink";
import { MyContext } from "../contaxt/dataProvider";
const selOptions = { brand: [], ram: [], rating: "", processor: "" };
const arrayOptions = {
  brand: ["Acer", "HP", "Dell", "Apple"],
  ram: ["4GB", "6GB", "8GB"],
  rating: ["1", "2", "3", "4"],
  processor: ["i3", "i5", "i7"],
};
const HomePage = () => {
  const [optionsArray, SetOptionsArray] = useState(arrayOptions);
  const [optionsSel, SetOptionsSel] = useState(selOptions);
  const allLaptops = useContext(MyContext)

  const onClear = () => {
    SetOptionsSel( { brand: [], ram: [], rating: "", processor: "" });
  };

  const laptops1 =
    optionsSel.brand.length > 0
      ? allLaptops.filter((lap) =>
          optionsSel.brand.find((val) => lap.brand == val)
        )
      : allLaptops;

  const laptops2 =
    optionsSel.ram.length > 0
      ? laptops1.filter((lap) => optionsSel.ram.find((val) => lap.ram == val))
      : laptops1;

  const laptops3 = optionsSel.processor
    ? laptops2.filter((lap) => lap.processor == optionsSel.processor)
    : laptops2;

  const laptops4 = optionsSel.rating
    ? laptops3.filter((lap) => lap.rating == optionsSel.rating)
    : laptops3;

  console.log(laptops1);

  return (
    <div className="container mt-5">
      {/* <SideLink/> */}
      <div className="row">
        <div className="col-3 border">
          <LeftPanal
            optionsArray={optionsArray}
            optionsSel={optionsSel}
            SetOptionsArray={SetOptionsArray}
            SetOptionsSel={SetOptionsSel}
            onClear ={onClear}
          />
        </div>
        <div className="col-9">
          <div className="container ">
           <h1 className="text-warning"> <marquee >Laptops</marquee></h1>
          <div className="d-flex flex-wrap">
           <div className="row">
           {laptops4.map((lap) => (
              <Card {...lap} />
            ))}
           </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

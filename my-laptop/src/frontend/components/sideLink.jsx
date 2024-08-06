import React, { useEffect } from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LeftPanal from "./leftPanal";

const selOptions = { brand: [], ram: [], rating: "", processor: "" };
const arrayOptions = {
  brand: ["Acer", "HP", "Dell", "Apple"],
  ram: ["4GB", "6GB", "8GB"],
  rating: ["1", "2", "3", "4"],
  processor: ["i3", "i5", "i7"],
};
const SideLink = () => {
  
  const [allLaptops, SetLaptops] = useState([]);
  const [optionsArray, SetOptionsArray] = useState(arrayOptions);
  const [optionsSel, SetOptionsSel] = useState(selOptions);
  console.log(optionsArray);
  let API = "http://localhost:2410/laptops";
  // optionsArray,optionsSel
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      SetLaptops(data.allLaptops.laptops);
      console.log(data.allLaptops);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  }, []);

  console.log(optionsSel);

  const onClear = () => {
    SetOptionsSel( { brand: [], ram: [], rating: "", processor: "" });
  };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className="bg-dark">
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Choose Options</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div className="">
          <LeftPanal
            optionsArray={optionsArray}
            optionsSel={optionsSel}
            SetOptionsArray={SetOptionsArray}
            SetOptionsSel={SetOptionsSel}
            onClear ={onClear}
          />
          </div>
          </Offcanvas.Body>
        </Offcanvas>

      
      </div>
      </>
    );
};

export default SideLink;

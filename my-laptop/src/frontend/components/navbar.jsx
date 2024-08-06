import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { IoCartOutline } from "react-icons/io5";

const MyNavbar = () => {
  const [URL, setUrl] = useState(null);
  const navigate = useNavigate();

  const loggedOutUser = () => {
    navigate("/");
  };

  return (
    <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
  );
};

export default MyNavbar;

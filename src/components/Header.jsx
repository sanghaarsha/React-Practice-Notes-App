import React from "react";
import { Newspaper } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <div className="navbar">
                {/* <Container> */}
                <Navbar.Brand href="#home">
                    <Newspaper color="royalblue" size={40} />
                    {"  "}
                    <div className="logo">
                        <Navbar.Text>Notes App</Navbar.Text>
                    </div>
                </Navbar.Brand>
                {/* </Container> */}
            </div>
        </Navbar>
    );
};

export default Header;

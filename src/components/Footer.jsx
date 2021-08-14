import React from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="footer-text">
            <Card.Footer className="footer">
                Copyright &copy; {date} Sangharsha Dahal
            </Card.Footer>
        </div>
    );
};

export default Footer;

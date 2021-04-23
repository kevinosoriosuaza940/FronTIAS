import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./Navbar.css";

const Example = (props) => {
  const { title } = props;

  return (
    <div>
      <Navbar className="navbar" color="dark" light expand="md">
        <NavbarBrand className="img">
          <Link to="/">
            <div className="imagen"></div>
          </Link>
        </NavbarBrand>
        <NavbarText>
          <span className="title">{title}</span>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Example;

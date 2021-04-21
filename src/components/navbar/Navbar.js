import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title } = props;

  return (
    <div>
      <Navbar className="navbar" color="dark" light expand="md">
        <NavbarBrand className="img"   href="/">
          <div className='imagen'>
          </div>
        </NavbarBrand>
        <NavbarText >
          <span className='title'>
            {title}
          </span>  
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Example;

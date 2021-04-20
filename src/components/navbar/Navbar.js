import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,

  NavbarText,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
    const {title} = props;


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarText>{title}</NavbarText>
      </Navbar>
    </div>
  );
};

export default Example;

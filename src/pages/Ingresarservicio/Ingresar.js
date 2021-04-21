import React from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Ingresar.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Ingresar() {
  return (
    <section>
      <NavbarCustom title="Ingresar Servicio" />
      <div className="main_ingresar">
        <Form inline>
          <FormGroup className="form">
            <Label for="exampleSearch">Id Tecnico</Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Id tecnico"
            />
          </FormGroup>
          <FormGroup className="form">
            <Label for="exampleSearch">Id Servico</Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Id tecnico"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Fecha inicio</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Hora Inicio</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Fecha Fin</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Hora fin</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
          <Button className="custom_button">Ingresar servicio</Button>
        </Form>
      </div>
    </section>
  );
}

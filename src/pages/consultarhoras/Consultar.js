import React from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Consultar.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Table } from "reactstrap";

export default function Consultar() {
  return (
    <section>
      <NavbarCustom title="Consultar Horas" />
      <aside>
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
          <FormGroup>
            <Label for="exampleNumber">Number semana </Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="ingrese numero de semana del año"
            />
          </FormGroup>
          <Button>Consultar servicio</Button>
        </Form>
      </aside>

      <article>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo Hora</th>
              <th>Cantidad de horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Id tecnico</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Numero semana</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Horas normales</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Horas nocturnas</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Horas normales extras</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Horas dominicales</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Horas nocturnas extras</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Horas dominicales extras</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>total_horas</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </article>
    </section>
  );
}

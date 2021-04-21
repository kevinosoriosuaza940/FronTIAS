import React, { useState, useEffect } from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Consultar.css";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import { get } from "../../services/requests";

export default function Consultar() {
  const [idtecnico, setIdTecnico] = useState("");
  const [numeroSemana, setNumeroSemana] = useState(1);
  const [reporteHoras, setReporteHoras] = useState({});
  const isDisabled = idtecnico.length > 0 && numeroSemana > 0;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await get(idtecnico, numeroSemana);
    const data = await response.json();
    setReporteHoras(data[0]);
    console.log(idtecnico, numeroSemana);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "idTecnico") {
      setIdTecnico(value);
    } else if (name === "numeroSemana") {
      setNumeroSemana(value);
    }
  };

  return (
    <section>
      <NavbarCustom title="Consultar Horas" />
      <div className="main_consultar">
        <aside>
          <Form inline onSubmit={handleSubmit}>
            <FormGroup className="form">
              <Label className="text-start">Id Tecnico</Label>
              <Input
                type="text"
                name="idTecnico"
                placeholder="Id tecnico"
                onChange={(e) => handleInput(e)}
                value={idtecnico}
              />
            </FormGroup>
            <FormGroup>
              <Label>Number semana </Label>
              <Input
                type="number"
                name="numeroSemana"
                placeholder="ingrese numero de semana del año"
                onChange={(e) => handleInput(e)}
              />
            </FormGroup>
            <Button
              className="custom_button "
              type="submit"
              disabled={!isDisabled}
            >
              Consultar servicio
            </Button>
          </Form>
        </aside>

        {reporteHoras ? (
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
                  <td>{reporteHoras.id_tecnico}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Numero semana</td>
                  <td>{reporteHoras.numero_semana}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Horas normales</td>
                  <td>{reporteHoras.horas_normales}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Horas nocturnas</td>
                  <td>{reporteHoras.horas_nocturnas}</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Horas normales extras</td>
                  <td>{reporteHoras.horas_normale_sextras}</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Horas dominicales</td>
                  <td>{reporteHoras.horas_dominicales}</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Horas nocturnas extras</td>
                  <td>{reporteHoras.horas_nocturnas_extras}</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Horas dominicales extras</td>
                  <td>{reporteHoras.horas_dominicales_extras}</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>total_horas</td>
                  <td>{reporteHoras.total_horas}</td>
                </tr>
              </tbody>
            </Table>
          </article>
        ) : (
          <article>
            <div>
              <h1>NO HAY DATA!!</h1>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

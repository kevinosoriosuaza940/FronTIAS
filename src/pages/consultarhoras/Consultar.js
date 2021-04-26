import React, { useState } from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Consultar.css";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import { get } from "../../services/requests";

export default function Consultar() {
  const [idtecnico, setIdTecnico] = useState("");
  const [numeroSemana, setNumeroSemana] = useState();
  const [reporteHoras, setReporteHoras] = useState({});

  const isDisabled = idtecnico.length > 0 && numeroSemana > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await get(idtecnico, numeroSemana);
      console.log(response.status)
      const data = await response.json();
      setReporteHoras(data[0]);
      
    } catch (error) {
      console.log(error);
      
    }
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
          <Form inline onSubmit={handleSubmit} className="text-light">
            <FormGroup className="form ">
              <Label>Id Tecnico</Label>
              <Input
                type="text "
                name="idTecnico"
                placeholder="Id tecnico"
                onChange={(e) => handleInput(e)}
                value={idtecnico}
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-wrap">Number semana </Label>
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

        {reporteHoras.idtecnico ? (
          
            <Table className="text-start text-light" >
              <thead>
                <tr>
                  <th>#</th>
                  <th >Tipo Hora</th>
                  <th>Cantidad de horas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Id tecnico</td>
                  <td>{reporteHoras.idtecnico}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Numero semana</td>
                  <td>{reporteHoras.numerosemana}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Horas normales</td>
                  <td>{reporteHoras.horasnormales}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Horas nocturnas</td>
                  <td>{reporteHoras.horasnocturas}</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Horas normales extras</td>
                  <td>{reporteHoras.horasnormalesextra}</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Horas dominicales</td>
                  <td>{reporteHoras.horasdomingo}</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Horas nocturnas extras</td>
                  <td>{reporteHoras.horasnocturnasextra}</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Horas dominicales extras</td>
                  <td>{reporteHoras.getHorasdomingoextra}</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>total_horas</td>
                  <td>{reporteHoras.totalhoras}</td>
                </tr>
              </tbody>
            </Table>
         
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
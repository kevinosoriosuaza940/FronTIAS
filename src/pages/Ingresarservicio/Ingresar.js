import React, { useState, useEffect } from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Ingresar.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { post } from "../../services/requests";

export default function Ingresar() {
  const [idtecnico, setIdTecnico] = useState();
  const [idservicio, setIdServicio] = useState();
  const [fechainicio, setFechainicio] = useState("");
  const [fechafin, setFechafin] = useState("");
  const [horainicio, setHorainicio] = useState("");
  const [horafin, setHorafin] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  let fechahorainicio = `${fechainicio} ${horainicio}`;
  let fechahorafin = `${fechafin} ${horafin}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = post(
      idtecnico,
      idservicio,
      fechahorainicio,
      fechahorafin
    );
    let obj = {
      idtecnico,
      idservicio,
      fechahorainicio,
      fechahorafin
    }
      console.log(obj)
  };

  const validacionFormulario = (e) => {

    if (
      idtecnico !== "" &&
      idtecnico !== null &&
      idservicio !== "" &&
      idservicio !== null &&
      fechainicio !== "" &&
      fechainicio !== null &&
      fechafin !== "" &&
      fechafin !== null &&
      horainicio !== "" &&
      horainicio !== null &&
      horafin !== "" &&
      horafin !== null
    ) {
      setIsDisabled(true);
    } else if (
      idtecnico !== "" ||
      idtecnico !== null ||
      idservicio !== "" ||
      idservicio !== null ||
      fechainicio !== "" ||
      fechainicio !== null ||
      fechafin !== "" ||
      fechafin !== null ||
      horainicio !== "" ||
      horainicio !== null ||
      horafin !== "" ||
      horafin !== null
    ) {
      setIsDisabled(false);
    }
  };

  const handleIdTecnicoChange = (e) => {
    setIdTecnico(e.target.value);
  };
  const handleIdServicioChange = (e) => {
    setIdServicio(e.target.value);
  };
  const handleFechaInicioChange = (e) => {
    setFechainicio(e.target.value);
  };
  const handleFechaFinChange = (e) => {
    setFechafin(e.target.value);
  };
  const handleHoraInicioChange = (e) => {
    setHorainicio(e.target.value);
  };
  const handleHoraFinChange = (e) => {
    setHorafin(e.target.value);
  };

  return (
    <section>
      <NavbarCustom title="Ingresar Servicio" />
      <div className="main_ingresar">
        <Form inline onSubmit={handleSubmit} onChange={validacionFormulario}>
          <FormGroup className="form">
            <Label></Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Id tecnico"
              onChange={handleIdTecnicoChange}
              // value={idtecnico}
            />
          </FormGroup>
          <FormGroup className="form">
            <Label></Label>

            <Input
              type="search"
              name="search"
              placeholder="Id Servico"
              onChange={handleIdServicioChange}
              // value={idservicio}
            />
          </FormGroup>
          <FormGroup>
            <Label></Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={handleFechaInicioChange}
              // value={fechainicio}
            />
          </FormGroup>
          <FormGroup>
            <Label></Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
              onChange={handleHoraInicioChange}
              // value={fechafin}
            />
          </FormGroup>
          <FormGroup>
            <Label></Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={handleFechaFinChange}
              // value={horainicio}
            />
          </FormGroup>
          <FormGroup>
            <Label></Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
              onChange={handleHoraFinChange}
              // value={horafin}
            />
          </FormGroup>
          <Button
            className="custom_button"
            // disabled={isDisabled}
          >
            Ingresar servicio
          </Button>
        </Form>
      </div>
    </section>
  );
}

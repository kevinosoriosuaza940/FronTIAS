import React, { useState } from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Ingresar.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { post } from "../../services/requests";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

export default function Ingresar() {
  const [idtecnico, setIdTecnico] = useState("");
  const [idservicio, setIdServicio] = useState("");
  const [fechainicio, setFechainicio] = useState();
  const [fechafin, setFechafin] = useState();
  const isDisable =
    idtecnico.length > 0 && idservicio.length > 0 && fechafin > fechainicio;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      idtecnico,
      fechainicio: formatDate(fechainicio),
      fechafinal: formatDate(fechafin),
      idservicio,
    };
    const response = await post(body);
    response.status > 400
      ? swal("Error", "No se puede guardar el registro", "error")
      : swal("Correcto", "Registro guardaro correctamente", "success");
  };

  const formatDate = (date) => {
    try {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hour = date.getHours();
      return `${year}-${month}-${day} ${hour}:00`;
    } catch (err) {
      console.error(err);
    }
  };

  const handleIdTecnicoChange = (e) => {
    setIdTecnico(e.target.value);
  };
  const handleIdServicioChange = (e) => {
    setIdServicio(e.target.value);
  };

  return (
    <section>
      <NavbarCustom title="Ingresar Servicio" />
      <div className="main_ingresar">
        <Form inline onSubmit={handleSubmit}>
          <FormGroup className="form mb-2">
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Id tecnico"
              onChange={handleIdTecnicoChange}
              // value={idtecnico}
            />
          </FormGroup>
          <FormGroup className="form mb-2">
            <Input
              type="search"
              name="search"
              placeholder="Id Servico"
              onChange={handleIdServicioChange}
              // value={idservicio}
            />
          </FormGroup>
          <FormGroup className="form mb-2">
            <DatePicker
              placeholderText="Fecha inicial"
              selected={fechainicio}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat="yyyy-MM-dd HH:mm"
              onChange={(date) => setFechainicio(date)}
            />
          </FormGroup>
          <FormGroup className="form mb-2">
            <DatePicker
              placeholderText="Fecha fin"
              selected={fechafin}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat="yyyy-MM-dd HH:mm"
              onChange={(date) => setFechafin(date)}
            />
          </FormGroup>
          <Button className="custom_button" disabled={!isDisable}>
            Ingresar servicio
          </Button>
        </Form>
      </div>
    </section>
  );
}

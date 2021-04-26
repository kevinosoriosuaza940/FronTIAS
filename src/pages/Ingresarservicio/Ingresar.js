import React, { useState, useEffect } from "react";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Ingresar.css";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { post, getServicios } from "../../services/requests";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";


export default function Ingresar() {
  const [idtecnico, setIdTecnico] = useState("");
  const [idservicio, setIdServicio] = useState("");
  const [fechainicio, setFechainicio] = useState();
  const [fechafin, setFechafin] = useState();
  const [servicios, setServicios] = useState([]);

  const isDisable =
    idtecnico.length > 0 && idservicio.length > 0 && fechafin > fechainicio;

  useEffect(() => {
    llenarServicios();
  }, []);

  const llenarServicios = async () => {
    try {
      const response = await getServicios();
      const data = await response.json();
      setServicios(data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      idtecnico,
      fechainicio: formatDate(fechainicio),
      fechafinal: formatDate(fechafin),
      idservicio,
    };
    try {
      const response = await post(body);
      if (response.status > 400 && response.status < 500) {
        swal("Error", "El registro no se puedo guardar!", "error");
      } else if (response.status >= 500) {
        swal(
          "Error",
          `El ID ${body.idtecnico} no existe en la base de datos!`,
          "error"
        );
      } else {
        swal(
          "Correcto",
          "El registro se ha guardado de manera correcta!",
          "success"
        ).then(()=>clearform());
      }
    } catch (error) {}
  };

  const clearform=()=>{
    setIdTecnico("")
    setIdServicio("")
    setFechainicio("")
    setFechafin("")
  }

  const formatDate = (date) => {
    try {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hour = date.getHours();
      return `${year}-${month}-${day} ${hour}:00:00`;
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
              type="text"
              name="idtecnico"
              placeholder="Id tecnico"
              onChange={handleIdTecnicoChange}
              value={idtecnico}
            />
          </FormGroup>
          <FormGroup className="form mb-2">
            <select name="servicios" id="servicios" onChange={handleIdServicioChange} className="form-select">
              <option value="" disabled selected hidden>Tipo servicio</option>
              {servicios.map((servicio)=>(
            
                <option value={servicio.idservicio} key={servicio.idservicio}>
                  {servicio.tiposervicio}
                </option>
              ))}
            </select>
        
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
              className="form-control"
              maxDate={new Date() - 2}
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
              className="form-control"
              maxDate={new Date() - 2}
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

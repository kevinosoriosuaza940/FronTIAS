import React from "react";
import CustomButtom from "../../components/button/Button";
import NavbarCustom from "../../components/navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <section>
      <NavbarCustom title="Home" />
      <div className="main">
        <div className="container">
          <CustomButtom
            className="button_izquierda"
            title="Ingresar Servicio"
            color="dark"
            route="/ingresar-servicio"
          />
        </div>
        <div className="container">
          <CustomButtom
            className="button_derecha"
            title="Consultar Horas"
            color="dark"
            route="/consultar-horas"
          />
        </div>
      </div>
    </section>
  );
}

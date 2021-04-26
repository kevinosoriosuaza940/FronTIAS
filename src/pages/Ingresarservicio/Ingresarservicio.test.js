import React from "react";
import { screen, render} from "@testing-library/react";

import Navbar from "../../components/navbar/Navbar"
import App from "../../App";

describe("Ingresarservicio",()=> {
    it("Deberia mostrar tittle Ingresar Servicio",() => {
        render(
            <App>
                <Navbar />
            </App>
        );
        expect(screen.queryByText(/Ingresar Servicio/)).toBeInTheDocument();
    })
})   


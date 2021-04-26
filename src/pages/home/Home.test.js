import React from "react";
import { screen, render} from "@testing-library/react";

import Navbar from "../../components/navbar/Navbar"
import App from "../../App";

describe("Home",()=> {
    it("Deberia mostrar tittle Home",() => {
        render(
            <App>
                <Navbar />
            </App>
        );
        expect(screen.queryByText(/Home/)).toBeInTheDocument()
    })
})   


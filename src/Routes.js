import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Consultar from './pages/consultarhoras/Consultar'
import Home from './pages/home/Home'
import Ingresar from './pages/Ingresarservicio/Ingresar'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ingresar-servicio" component={Ingresar} />
            <Route path="/consultar-horas" component={Consultar} />
        </Switch>
    )
}

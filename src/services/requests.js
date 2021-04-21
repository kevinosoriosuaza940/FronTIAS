import { API_URI } from './config'

export async function get(idtecnico, numeroSemana) {
    const url = `${API_URI}/consulta-horas?idTecnico=${idtecnico}&numeroSemana=${numeroSemana}`

    const response = await fetch(url, {method:'GET'})
    return response
}

export function post() {
    
}
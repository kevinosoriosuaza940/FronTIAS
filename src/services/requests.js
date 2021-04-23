import { API_URI } from './config'

export async function get(idtecnico, numeroSemana) {
    const url = `${API_URI}/consulta-horas?idTecnico=${idtecnico}&numeroSemana=${numeroSemana}`
    try {
      const response = await fetch(url, {method:'GET'})
      return response
    } catch (error) {
      console.log(error)
    }

}

export async function post(body) {
  const url = `${API_URI}/registrar-servicio`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

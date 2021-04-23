import { API_URI } from './config'

export async function get(idtecnico, numeroSemana) {
    const url = `${API_URI}/results?idtecnico=${idtecnico}&numerosemana=${numeroSemana}`
    try {
      const response = await fetch(url, {method:'GET'})
      return response
    } catch (error) {
      console.log(error)
    }

}

export async function post(body) {
  const url = `${API_URI}/reporteservicio`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

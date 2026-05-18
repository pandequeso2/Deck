// Apuntamos al backend local (y luego a través de Docker)
const API_URL = 'http://localhost:8080/api/v1/cards'

export const fetchCards = async (params = {}) => {
  try {
    // Si necesitas buscar por nombre usando tu backend
    const url = params.name 
      ? `${API_URL}/type/${params.name}` // O el endpoint que decidas para buscar
      : API_URL;

    const response = await fetch(url)
    const data = await response.json()
    return data // Tu backend devuelve la lista directamente, no un { data: [...] }
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}

export const searchCardByName = async (name) => {
  return fetchCards({ name })
}
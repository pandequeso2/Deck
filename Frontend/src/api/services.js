const API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

export const fetchCards = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString()
    const response = await fetch(`${API_URL}?${query}`)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}

export const searchCardByName = async (name) => {
  return fetchCards({ name })
}
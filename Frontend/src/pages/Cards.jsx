import { useState, useEffect } from 'react'
import { fetchCards } from '../api/services'
import Card from '../components/Card'

function Cards() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCards()
  }, [])

  const loadCards = async () => {
    setLoading(true)
    const data = await fetchCards({ num: 20, offset: 0 })
    setCards(data)
    setLoading(false)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!search.trim()) {
      loadCards()
      return
    }
    setLoading(true)
    const data = await fetchCards({ name: search })
    setCards(data)
    setLoading(false)
  }

  return (
    <div className="cards-page">
      <h1>Cartas Yu-Gi-Oh!</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar carta..."
        />
        <button type="submit">Buscar</button>
      </form>

      {loading ? (
        <p>Cargando cartas...</p>
      ) : (
        <div className="card-grid">
          {cards?.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cards
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a Yu-Gi-Oh! Deck</h1>
      <p>Sistema de gestión de cartas y duelos basado en microservicios</p>
      
      <div className="feature-grid">
        <Link to="/cards" className="feature-card">
          <h2>🃏 Cartas</h2>
          <p>Explora todas las cartas disponibles</p>
        </Link>
        
        <Link to="/decks" className="feature-card">
          <h2>📦 Mazos</h2>
          <p>Crea y gestiona tus mazos</p>
        </Link>
        
        <Link to="/duel" className="feature-card">
          <h2>⚔️ Duelo</h2>
          <p>Simula duelos entre jugadores</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
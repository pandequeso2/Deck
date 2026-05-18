import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">⚡ Yu-Gi-Oh! Deck</Link>
      <div className="nav-links">
        <Link to="/cards">Cartas</Link>
        <Link to="/decks">Mazos</Link>
        <Link to="/duel">Duelo</Link>
      </div>
    </nav>
  )
}

export default Navbar
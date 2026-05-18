function Card({ card }) {

  const imageUrl = "https://images.ygoprodeck.com/images/cards/89631139.jpg"; // Placeholder genérico

  return (
    <div className="yugioh-card">
      <img src={imageUrl} alt={card.name} />
      <div className="card-info">
        <h3>{card.name}</h3>
        <p>Tipo: {card.cardType}</p>
        {card.attack !== null && <p>ATK: {card.attack} / DEF: {card.defense}</p>}
        <p className="card-desc">{card.description?.substring(0, 100)}...</p>
      </div>
    </div>
  )
}

export default Card
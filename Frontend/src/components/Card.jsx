function Card({ card }) {
  return (
    <div className="yugioh-card">
      <img src={card.card_images[0].image_url_small} alt={card.name} />
      <div className="card-info">
        <h3>{card.name}</h3>
        <p>Tipo: {card.type}</p>
        {card.atk !== undefined && <p>ATK: {card.atk} / DEF: {card.def}</p>}
        <p className="card-desc">{card.desc.substring(0, 100)}...</p>
      </div>
    </div>
  )
}

export default Card
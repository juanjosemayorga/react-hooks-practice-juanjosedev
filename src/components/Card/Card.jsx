import React from 'react'
import './card'

export const Card = ({ image, name, status }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={name}/>
      <h3 className="card__name">{name}</h3>
      <p className="card__status">{status}</p>
    </div>
  )
}
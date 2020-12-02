import React from 'react'

export const Card = ({ image, name, status }) => {
  return (
    <div className="CardContainer">
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{status}</p>
    </div>
  )
}
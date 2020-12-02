import React, { useState, useEffect } from 'react'
import { Card } from '../Card/Card'

export const Characters = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(resp => resp.json())
      .then(data => {
        setCharacters(data.results)
      })
  }, [])

  return(
    <div className="Characters">
      {
        characters.map(character => {
          return <Card key={character.id}{...character}/>
        })
      }
    </div>
  )
}
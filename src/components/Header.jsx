import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export const Header = () => {

  const [darkMode, setDarkMode] = useState(false)

  const theme = useContext(ThemeContext)

  const handleClick = _ => {
    setDarkMode(!darkMode)
  }

  return(
    <div style={darkMode ? theme.dark : theme.light} className="Header">
      <h1>ReactHooks</h1>
      <button
        className="ButtonHeader" 
        onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}